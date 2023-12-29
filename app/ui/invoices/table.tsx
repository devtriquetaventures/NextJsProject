import Image from 'next/image';
import { UpdateInvoice, DeleteInvoice } from '@/app/ui/buttons';
import InvoiceStatus from '@/app/ui/invoices/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredInvoices } from '@/app/lib/invoices-data';
import InvoicesListTable from './invoices-table';

export default async function InvoicesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const invoices = await fetchFilteredInvoices(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="overflow-hidden rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white p-2 md:pt-0">

          <InvoicesListTable data={invoices} />

        </div>
      </div>
    </div>
  );
}
