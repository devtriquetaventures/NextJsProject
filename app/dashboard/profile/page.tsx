import { Metadata } from 'next';
import Table from '@/app/ui/profile/table';
import { auth } from '@/auth';

export const metadata: Metadata = {
  title: 'Perfil',
};

export default async function Page() {
  const session = await auth();

  return (
    <main>
      {session?.user && session.user.name && session.user.email && (
        <Table name={session.user.name} email={session.user.email} />
      )}
    </main>
  );
}
