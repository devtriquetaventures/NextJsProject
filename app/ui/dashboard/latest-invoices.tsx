import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { fetchLatestInvoices } from '@/app/lib/invoices-data';


export default async function LatestInvoices() {

  const latestInvoices = await fetchLatestInvoices()

  return (
    
    <div className="flex w-full flex-col md:col-span-4">
      <div className='p-2'>
        <h2 className="text-xl font-bold">Ultimas facturas</h2>
      </div>
      <div className="flex flex-col justify-between rounded-xl bg-gray-50 dark:bg-gray-900 p-4">

        <div className="bg-white dark:bg-gray-800 px-6">
          {latestInvoices.map((invoice, i) => {
            return (
              <div
                key={invoice.id}
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
                      {invoice.name}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      {invoice.email}
                    </p>
                  </div>
                </div>
                <p
                  className='truncate text-sm font-medium md:text-base'
                >
                  {invoice.amount}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Actualizado ahora mismo</h3>
        </div>
      </div>
    </div>
  );
}
