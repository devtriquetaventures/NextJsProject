import Form from '@/app/ui/users/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { notFound } from 'next/navigation'
import { Metadata } from 'next';
import { fetchUserById, fetchUsers } from '@/app/lib/users-data';
 
export const metadata: Metadata = {
  title: 'Edit User'
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
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Users', href: '/dashboard/users' },
          {
            label: 'Edit User',
            href: `/dashboard/users/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form user={users} />
    </main>
  );
}