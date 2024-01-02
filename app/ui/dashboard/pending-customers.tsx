import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { fetchLatestInvoices } from '@/app/lib/invoices-data';
import { fetchPendingCustomers } from '@/app/lib/customers-data';
import { formatCurrency } from '@/app/lib/utils';
import InvoiceStatus from '../invoices/status';
import Pagination from '../invoices/pagination';


export default async function PendingCustomers({
  // customers,
  currentPage,
  query
}: {
  // customers: FormattedCustomersTable[];
  currentPage: number;
  query: string;
}) {

  const pendingCustomers = await fetchPendingCustomers(currentPage)

  return (
    
    <div className="flex w-full flex-col md:col-span-4">
      <div className='p-2'>
        <h2 className="text-xl font-bold">Clientes con dinero pendiente</h2>
      </div>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 dark:bg-gray-900 p-4">

        <div className="bg-white dark:bg-gray-800 px-6">
          {pendingCustomers.map((customer, i) => {
            return (
              <div
                key={customer.id}
                className={clsx(
                  'flex flex-row items-center justify-between py-4',
                  {
                    'border-t': i !== 0,
                  },
                )}
              >
                <div className="flex items-center">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base">
                      {customer.name}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      {customer.email}
                    </p>
                  </div>
                </div>
                <div className='flex flex-row gap-5'>
                  <InvoiceStatus status='pending'/>
                  <p
                    className='truncate text-sm font-medium md:text-base'
                  >
                    {formatCurrency(customer.total_pending)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={2} />
        </div>
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Actualizado ahora mismo</h3>
        </div>
      </div>
    </div>
  );
}
