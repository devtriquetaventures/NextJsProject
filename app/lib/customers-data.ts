import { sql } from '@vercel/postgres';
import {
  CustomerField,
  CustomersTableType,
  CustomerForm
} from './definitions';
import { formatCurrency } from './utils';
import { unstable_noStore as noStore } from 'next/cache';

const ITEMS_PER_PAGE = 6;

export async function fetchCustomersPages(query: string) {
  noStore();
  try {
    const count = await sql`SELECT COUNT(*)
    FROM customers
    WHERE
      customers.name ILIKE ${`%${query}%`} OR
      customers.email ILIKE ${`%${query}%`} 
  `;
    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of customers.');
  }
}

export async function fetchCustomerById(id: string) {
  noStore();
  try {
    const data = await sql<CustomerForm>`
      SELECT
        customers.id,
        customers.name,
        customers.email,
        customers.image_url
      FROM customers
      WHERE customers.id = ${id};
    `;

    const customer = data.rows.map((customer) => ({
      ...customer,
      // Convert amount from cents to dollars
    }));

    console.log(customer)
    return customer[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch customer.');
  }
}

export async function fetchCustomers() {
  noStore();
  try {
    const data = await sql<CustomerField>`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `;

    const customers = data.rows;
    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all customers.');
  }
}

export async function fetchFilteredCustomers(query: string, currentPage: number) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const data = await sql<CustomersTableType>`
		SELECT
		  customers.id,
		  customers.name,
		  customers.email,
		  customers.image_url,
		  COUNT(invoices.id) AS total_invoices,
		  SUM(CASE WHEN invoices.status = 'pending' THEN invoices.amount ELSE 0 END) AS total_pending,
		  SUM(CASE WHEN invoices.status = 'paid' THEN invoices.amount ELSE 0 END) AS total_paid
		FROM customers
	  LEFT JOIN invoices ON customers.id = invoices.customer_id
		WHERE
		  customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`}
		GROUP BY customers.id, customers.name, customers.email, customers.image_url
		ORDER BY customers.name ASC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
	  `;

    const customers = data.rows.map((customer) => ({
      ...customer
    }));

    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch customer table.');
  }
}

const ITEMS_PER_PAGE_2 = 5; 

export async function fetchPendingCustomers(currentPage: number) {
  const offset = (currentPage -1) * ITEMS_PER_PAGE_2
  try {
    const data = await sql<CustomersTableType>`
      SELECT
        customers.id,
        customers.name,
        customers.email,
        customers.image_url,
        (SELECT SUM(invoices.amount) FROM invoices WHERE invoices.customer_id = customers.id AND invoices.status = 'pending') AS total_pending
      FROM customers
      WHERE customers.id IN (
        SELECT DISTINCT customer_id
        FROM invoices
        WHERE status = 'pending'
      )
      LIMIT ${ITEMS_PER_PAGE_2} OFFSET ${offset}
    `;

    const pendingCustomers = data.rows.map((customer) => ({
      ...customer,
      total_pending: customer.total_pending || 0, // Manejar casos donde total_pending sea null
    }));
    return pendingCustomers;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the pending customers:');
  }
}
