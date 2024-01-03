'use server';

import { z } from 'zod'
import { sql } from '@vercel/postgres'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt'; 
import { fetchUserByEmail, fetchUserById } from '@/app/lib/users-data'

const FormUserSchema = z.object({
  id: z.string(),
  username: z.coerce.string({
      invalid_type_error: 'Please enter a username'
    })
    .min(1, { 
      message: "Please enter a username" 
    }),
    email: z.string().email(),
    password: z.string().min(6, {
      message: "Please enter a password of 6 or more characteres"
    })
})

export type State = {
  errors?: {
    username?: string[];
    email?: string[];
    password?: string[];
  };
  message?: string | null;
};

const CreateUsers = FormUserSchema.omit({id: true});


export async function CreateUser(prevState: State, formData: FormData) {

  const validatedFields = CreateUsers.safeParse({
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
  });
  
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create User.',
    };
  }
  
  const { username, email, password } = validatedFields.data;

 
  try {

    bcrypt.genSalt(10, (err, salt) => {

      bcrypt.hash(password, salt, async (err, hashedPassword: string) => {

        if (err) {
          console.error('Error al hashear la contraseña:', err);
          return
        } 
        
        await sql`
        INSERT INTO users (name, email, password)
        VALUES (${username}, ${email}, ${hashedPassword})
      `;
  
        
      });
    });
    revalidatePath('/dashboard/users');
    return {
      succes: true
    }
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create User.',
    };
  }
 
}

const FormUserEditSchema = z.object({
  id: z.string(),
  username: z.coerce.string({
      invalid_type_error: 'Please enter a username'
    })
    .min(1, { 
      message: "Please enter a username" 
    }),
    email: z.coerce.string().email(),
    password: z.coerce.string({
      invalid_type_error: 'Please enter a username'
    }).min(6, {
      message: "Please enter a password of 6 or more characteres"
    }).optional(),
    oldPassword: z.coerce.string().min(6, {
      message: "Please enter a password of 6 or more characteres"
    }).optional()
})

const UpdateUser = FormUserEditSchema.omit({ id: true });

export async function updateUser(
  id: string,
  prevState: State,
  formData: FormData,
) {

  const userData = {
    username: formData.get('username'),
    email: formData.get('email')
  }

  const passData = {
    password: formData.get('password'),
    oldPassword: formData.get("oldPassword")
  }

  const validatedFields = UpdateUser.safeParse(
    formData.get('password') || formData.get("oldPassword") ? { ...userData, ...passData } : userData
  );


  if (!validatedFields.success) {
    console.log('zod validation error:', validatedFields.error.flatten().fieldErrors)

    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update User.',
    };
  }

  const { username, email, password, oldPassword } = validatedFields.data;

  let updateQuery = ''

  if (password && oldPassword){
    const userDb = await fetchUserById(id)
    let validatePassword = false
    let hashedNewPassword = ''

    hashedNewPassword = bcrypt.hashSync(password, 10);
        validatePassword = bcrypt.compareSync(oldPassword, userDb.password );


    if (validatePassword) {
      try {
        await sql`
          UPDATE users
          SET name = ${username}, email = ${email}, password = ${hashedNewPassword}
          WHERE id = ${id}
        `;
        revalidatePath('/dashboard/users');
        return {
          succes: true
        }
      } catch (error) {
        console.log('error', error);
        return {
          message: 'Database Error: Failed to Update User.'
        };
      }
    } else {
      return {
        errors: {
          oldPassword: ['La contraseña actual no coincide con la indicada.']
        }
      }
    }

  } else {
    try {
      await sql`
        UPDATE users
        SET name = ${username}, email = ${email}
        WHERE id = ${id}
      `;
        revalidatePath('/dashboard/users');
        return {
          succes: true
        }
    } catch (error) {
      console.log('error', error);
      return {
        message: 'Database Error: Failed to Update User.'
      };
    }
  }

}

export async function deleteUser(id: string) {
  try {
    await sql`DELETE FROM users WHERE id = ${id}`;
    revalidatePath('/dashboard/users');
    return { message: 'Deleted User.',
              succes: true };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete User.' };
  }
}

const FormUserByEmailSchema = z.object({
  email: z.string(),
    password: z.coerce.string({
    }).min(6, {
      message: "Please enter a password of 6 or more characteres"
    }),
    oldPassword: z.coerce.string().min(6, {
      message: "Please enter a password of 6 or more characteres"
    })
})

const UpdateUserByEmail = FormUserByEmailSchema.omit({ email: true });

export async function updateUserByEmail(
  email: string,
  prevState: State,
  formData: FormData,
) {

  const validatedFields = UpdateUserByEmail.safeParse({
    password: formData.get('password'),
    oldPassword: formData.get('oldPassword')
  });


  if (!validatedFields.success) {
    console.log('zod validation error:', validatedFields.error.flatten().fieldErrors)

    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update User.',
    };
  }

  const { password, oldPassword } = validatedFields.data;

  let updateQuery = ''

  if (password && oldPassword){
    const userDb = await fetchUserByEmail(email)
    let validatePassword = false
    let hashedNewPassword = ''

    hashedNewPassword = bcrypt.hashSync(password, 10);
        validatePassword = bcrypt.compareSync(oldPassword, userDb.password );


    if (validatePassword) {
      try {
        await sql`
          UPDATE users
          SET password = ${hashedNewPassword}
          WHERE email = ${email}
        `;
        revalidatePath('/dashboard/settings');
        return {
          message: 'Contraseña actualizada con exito',
          succes: true
        }
      } catch (error) {
        console.log('error', error);
        return {
          message: 'Database Error: Failed to Update User.'
        };
      }
    } else {
      return {
        errors: {
          oldPassword: ['La contraseña actual no coincide con la indicada.']
        }
      }
    }

  }


}