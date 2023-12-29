import { fetchFilteredCustomers } from '@/app/lib/customers-data';
import CustomersListTable from './customers-table';

export default async function CustomersTable({
  // customers,
  currentPage,
  query
}: {
  // customers: FormattedCustomersTable[];
  currentPage: number;
  query: string;
}) {
  const customers = await fetchFilteredCustomers(query, currentPage)
  return (
    <div>
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white p-2 md:pt-0">

              <CustomersListTable data={customers} />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
