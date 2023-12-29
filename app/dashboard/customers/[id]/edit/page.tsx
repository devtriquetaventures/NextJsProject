import Form from '@/app/ui/customers/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomerById, fetchCustomers } from '@/app/lib/customers-data';
import { notFound } from 'next/navigation'
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Editar Clientes'
};
  
export default async function Page({ params } : { params: { id: string } }) {
  const id = params.id;
  const [customers] = await Promise.all([
    fetchCustomerById(id),
    fetchCustomers(),
  ]);

  if (!customers) {
    notFound();
  }
  
  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Clientes', href: '/dashboard/customers' },
          {
            label: 'Editar Clientes',
            href: `/dashboard/customers/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form customer={customers} />
    </div>
  );
}