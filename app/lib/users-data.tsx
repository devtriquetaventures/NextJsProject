import { unstable_noStore as noStore, revalidatePath } from 'next/cache';
import { UserEditField, UserField, UserForm, UsersTableType } from "./definitions";
import { sql } from "@vercel/postgres";
import { formatCurrency } from './utils';
import { z } from 'zod';
import { redirect } from 'next/navigation';

export async function fetchFilteredUsers(query: string, currentPage: number) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const data = await sql<UsersTableType>`
		SELECT
		  users.id,
		  users.name,
		  users.email
		FROM users
		WHERE
		  users.name ILIKE ${`%${query}%`} OR
        users.email ILIKE ${`%${query}%`}
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
	  `;

    const users = data.rows

    return users;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch users table.');
  }
}

const Formuserschema = z.object({
  id: z.string(),
  name: z.coerce.string({
      invalid_type_error: 'Please enter a name'
    })
    .min(1, { 
      message: "Must be 5 or sdfgsdgsd characters long" 
    }),
  email: z.coerce.string({
    invalid_type_error: 'Please enter a email'
  }).email(),
})

export type State = {
  errors?: {
    name?: string[];
    email?: string[];
  };
  message?: string | null;
};

export async function fetchUserById(id: string) {
  noStore();
  try {
    const data = await sql<UserEditField>`
      SELECT
        users.id,
        users.name,
        users.email,
        users.password
      FROM users
      WHERE users.id = ${id};
    `;

    const user = data.rows.map((user) => ({
      ...user,
      // Convert amount from cents to dollars
    }));
  
    return user[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch user.');
  }
}

export async function fetchUsers() {
  noStore();
  try {
    const data = await sql<UserEditField>`
      SELECT
        id,
        name
      FROM users
      ORDER BY name ASC
    `;

    const users = data.rows;
    return users;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all users.');
  }
}

const ITEMS_PER_PAGE = 6;

export async function fetchUsersPages(query: string) {
  noStore();
  try {
    const count = await sql`SELECT COUNT(*)
    FROM users
    WHERE
      users.name ILIKE ${`%${query}%`} OR
      users.email ILIKE ${`%${query}%`} 
  `;
    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of users.');
  }
}