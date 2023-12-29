// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.

export type Revenue = {
  month: string;
  revenue: number;
};

// ----------------------------------------------------------------------------------------------

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  status: 'pending' | 'paid';
};

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};

// ----------------------------------------------------------------------------------------------

export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type CustomerEditField = {
  id: string;
  name: string;
  email: string;
  image_url: string;
}

export type CustomerForm = {
  id: string;
  name: string;
  email: string;
  image_url: string;
}

// ----------------------------------------------------------------------------------------------

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type UserField = {
  id: string;
  name: string;
}

export type UserEditField = {
  id: string;
  name: string;
  email: string;
  oldPassword: string;
  password: string;
}

export type UserEmailField = {
  email: string;
  password: string;
}

export type UserForm = {
  id: string;
  name: string;
  email: string;
  password: string;
}

export type UsersTableType = {
  id: string;
  name: string;
  email: string;
}
