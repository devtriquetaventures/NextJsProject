'use server';

import { z } from 'zod'
import { sql } from '@vercel/postgres'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt'; 

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

  console.log(validatedFields)
  
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

const UpdateUser = FormUserSchema.omit({ id: true });

export async function updateUser(
  id: string,
  prevState: State,
  formData: FormData,
) {

  const validatedFields = UpdateUser.safeParse({
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
  });
 
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update User.',
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
        UPDATE users
        SET name = ${username}, email = ${email}, password = ${hashedPassword}
        WHERE id = ${id}
      `
      });
    });

  } catch (error) {
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