import Form from '@/app/ui/users/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { notFound } from 'next/navigation'
import { Metadata } from 'next';
import { fetchUserById, fetchUsers } from '@/app/lib/users-data';
 
export const metadata: Metadata = {
  title: 'Editar Usuario'
};
  
export default async function Page({ params } : { params: { id: string } }) {
  const id = params.id;
  const [users] = await Promise.all([
    fetchUserById(id),
    fetchUsers(),
  ]);

  if (!users) {
    notFound();
  }
  
  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Usuarios', href: '/dashboard/users' },
          {
            label: 'Editar Usuario',
            href: `/dashboard/users/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form user={users} />
    </div>
  );
}