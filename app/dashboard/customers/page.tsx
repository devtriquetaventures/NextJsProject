import { Metadata } from 'next';
import CustomersTable from '@/app/ui/customers/table'
import { fetchCustomersPages, fetchFilteredCustomers } from '@/app/lib/data';
import { DeleteCustomer } from '@/app/ui/invoices/buttons';
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
  const totalPages = await fetchCustomersPages(query);

  return (
    <>
    <CustomersTable query={query} currentPage={currentPage}/>
    <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </>
   ) 
}