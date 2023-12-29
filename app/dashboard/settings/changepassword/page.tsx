import { Metadata } from 'next';
import { fetchUserByEmail } from '@/app/lib/users-data';
import { auth } from '@/auth';
import ChangePasswordTable from '@/app/ui/settings/change-password-table';

 
export const metadata: Metadata = {
  title: 'Editar Usuario'
};
  
export default async function Page() {
  const session = await auth();
  const user = await fetchUserByEmail(session?.user?.email)

  
  return (
    <div>
    {session?.user && session.user.name && session.user.email && (
      <ChangePasswordTable user={user} />
    )}
  </div>
  );
}