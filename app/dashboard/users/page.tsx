import { Metadata } from 'next';
import Table from '@/app/ui/users/table'
import { fetchUsersPages } from '@/app/lib/users-data';
import Pagination from '@/app/ui/invoices/pagination';
import { CreateUsers } from '@/app/ui/buttons';
import Search from '@/app/ui/search';
import { Suspense } from 'react';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
 
export const metadata: Metadata = {
  title: 'Usuarios'
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
    <div className="w-full">
      <div>
        <h1 className="text-xl font-bold">Usuarios</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Buscar por nombre y apellido..." />
        <CreateUsers />
      </div>
       <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}