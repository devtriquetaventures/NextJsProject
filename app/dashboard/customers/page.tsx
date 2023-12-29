import { Metadata } from 'next';
import CustomersTable from '@/app/ui/customers/table'
import { fetchCustomersPages } from '@/app/lib/customers-data';
import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import { Suspense } from 'react';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import Table from '@/app/ui/customers/table'
import { CreateCustomers } from '@/app/ui/buttons';
 
export const metadata: Metadata = {
  title: 'Clientes'
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
  const totalPages = await fetchCustomersPages(query);

  return (
    <section>
      <div>
        <h1 className="text-xl font-bold">Clientes</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Buscar por nombre y apellido..." />
        <CreateCustomers />
      </div>
       <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </section>
  );
}