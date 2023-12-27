import Form from '@/app/ui/customers/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomerById, fetchCustomers } from '@/app/lib/customers-data';
import { notFound } from 'next/navigation'
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Edit Customer'
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
    <main className='md:py-20'>
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
      <Form customer={customers} />
    </main>
  );
}