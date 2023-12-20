import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data';
import { notFound } from 'next/navigation'
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Edit Customer'
};
  
export default async function Page({ params } : { params: { id: string } }) {
  const id = params.id;
  const [customers] = await Promise.all([
    fetchCustomers(),
  ]);

  if (!customers) {
    notFound();
  }
  
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: '/dashboard/customers' },
          {
            label: 'Edit Customer',
            href: `/dashboard/customers/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}