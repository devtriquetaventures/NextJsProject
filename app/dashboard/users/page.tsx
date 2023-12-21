import { Metadata } from 'next';
import Table from '@/app/ui/users/table'
import { fetchUsersPages } from '@/app/lib/users-data';
import Pagination from '@/app/ui/invoices/pagination';
 
export const metadata: Metadata = {
  title: 'Customers'
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchUsersPages(query);

  return (
    <>
    <Table query={query} currentPage={currentPage}/>
    <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </>
   ) 
}