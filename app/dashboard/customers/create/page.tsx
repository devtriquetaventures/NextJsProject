import Form from '@/app/ui/customers/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Create Customer'
};
 
export default async function Page() {
 
  return (
    <main className='md:py-20'>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: '/dashboard/customer' },
          {
            label: 'Create Customer',
            href: '/dashboard/customers/create',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}