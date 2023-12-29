import Form from '@/app/ui/customers/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Crear Cliente'
};
 
export default async function Page() {
 
  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Clientes', href: '/dashboard/customer' },
          {
            label: 'Crear Cliente',
            href: '/dashboard/customers/create',
            active: true,
          },
        ]}
      />
      <Form />
    </div>
  );
}