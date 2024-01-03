import { PencilIcon, PlusIcon, TrashIcon, UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteInvoice } from '@/app/lib/invoices-actions'
import { deleteCustomer } from '@/app/lib/customer-actions'
import { deleteUser } from "@/app/lib/users-actions"

export function CreateInvoice() {
  return (
    <Link
      href="/dashboard/invoices/create"
      className="flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Crear Factura</span>{' '}
      <PlusIcon className="h-5 md:hidden" />
    </Link>
  );
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/invoices/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100 dark:hover:text-black"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteInvoice({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);

  return (
    <>
      <form action={deleteInvoiceWithId}>
        <button className="rounded-md border p-2 hover:bg-gray-100 dark:hover:text-black">
          <span className="sr-only">Borrar</span>
          <TrashIcon className="w-5" />
        </button>
      </form>
    </>
  );
}

export function CreateCustomers() {
  return (
    <Link
      href="/dashboard/customers/create"
      className="flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Nuevo cliente</span>
      <PlusIcon className="h-5 md:hidden" />
    </Link>
  );
}


export function UpdateCustomer({ id }: { id: string }) {
  return (
    <Link
    href={`/dashboard/customers/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100 dark:hover:text-black"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteCustomer({ id }: { id: string }) {
  const deleteCustomerWithId = deleteCustomer.bind(null, id);
  
  return (
    <>
      <form action={deleteCustomerWithId}>
        <button className="rounded-md border p-2 hover:bg-gray-100 dark:hover:text-black">
          <span className="sr-only">Borrar</span>
          <TrashIcon className="w-5" />
        </button>
      </form>
    </>
  );
}

export function CreateUsers() {
  return (
    <Link
      href="/dashboard/users/create"
      className="flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Crear Usuario</span>{' '}
      <PlusIcon className="h-5 md:hidden" />
    </Link>
  );
}

export function DeleteUser({ id }: { id: string }) {
  const deleteUserWithId = deleteUser.bind(null, id);
  
  return (
    <>
      <form action={deleteUserWithId}>
        <button className="rounded-md border p-2 hover:bg-gray-100 dark:hover:text-black">
          <span className="sr-only">Borrar</span>
          <TrashIcon className="w-5" />
        </button>
      </form>
    </>
  );
}

export function UpdateUser({ id }: { id: string }) {
  return (
    <Link
    href={`/dashboard/users/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100 dark:hover:text-black"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}