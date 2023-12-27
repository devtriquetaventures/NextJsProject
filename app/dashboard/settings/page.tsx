import { Metadata } from 'next';
import Table from '@/app/ui/settings/table'
import { fetchUsers, fetchUsersPages } from '@/app/lib/users-data';
import Pagination from '@/app/ui/invoices/pagination';
import { auth } from '@/auth';
 
export const metadata: Metadata = {
  title: 'Settings'
};


export default async function Page(){
  
  const session = await auth()
  console.log(session)
  

  return (
    <main className='md:py-20'>  
      {session?.user && session.user.name && session.user.email &&
      <Table name={session.user.name} email={session.user.email}/>
    }
    </main>
   ) 
}