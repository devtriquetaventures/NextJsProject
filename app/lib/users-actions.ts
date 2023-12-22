'use server';

import { z } from 'zod'
import { sql } from '@vercel/postgres'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt'; 
import { fetchUserById } from '@/app/lib/users-data'

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

  } catch (error) {
    return {
      message: 'Database Error: Failed to Create User.',
    };
  }
 
  revalidatePath('/dashboard/users');
  redirect('/dashboard/users');
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
    let hashedOldPassword = ''

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, async (err, hashedPassword: string) => {
        if (err) {
          console.error('Error al hashear la contraseña:', err);
          return
        }
        hashedNewPassword = hashedPassword
      });
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(oldPassword, salt, async (err, hashedPassword: string) => {
        if (err) {
          console.error('Error al hashear la contraseña:', err);
          return
        }
        hashedOldPassword = hashedPassword
        validatePassword = bcrypt.compareSync(oldPassword, userDb.password );
      });
    });

    console.log('es el mismo que la db?', validatePassword)
    console.log('new_password enviado', password,  hashedNewPassword)
    console.log('old_password enviado', oldPassword,  hashedOldPassword)
    console.log('password db', userDb.password)

    if (validatePassword) {
      updateQuery = `
        UPDATE users
        SET name = ${username}, email = ${email}, password = ${hashedNewPassword}
        WHERE id = ${id}
      `
    } else {
      return {
        errors: {
          oldPassword: ['La contraseña actual no coincide con la indicada.']
        }
      }
    }

  } else {
    updateQuery = `
      UPDATE users
      SET name = ${username}, email = ${email}
      WHERE id = ${id}
    `
  }

  try {
     sql + updateQuery;
  } catch (error) {
    console.log('error', error)
    return {
      message: 'Database Error: Failed to Update User.',
    };
  }


  revalidatePath('/dashboard/users');
  redirect('/dashboard/users');
}

export async function deleteUser(id: string) {
  try {
    await sql`DELETE FROM users WHERE id = ${id}`;
    revalidatePath('/dashboard/users');
    return { message: 'Deleted User.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete User.' };
  }
}