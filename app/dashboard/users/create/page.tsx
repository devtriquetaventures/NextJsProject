import Form from '@/app/ui/users/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Crear Usuario'
};
 
export default async function Page() {
 
  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Usuarios', href: '/dashboard/users' },
          {
            label: 'Crear Usuario',
            href: '/dashboard/users/create',
            active: true,
          },
        ]}
      />
      <Form />
    </div>
  );
}