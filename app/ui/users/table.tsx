import { fetchFilteredUsers } from '@/app/lib/users-data';
import UsersListTable from './users-table';

export default async function UsersTable({
  currentPage,
  query
}: {
  currentPage: number;
  query: string;
}) {

  const users = await fetchFilteredUsers(query, currentPage)

  return (
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white p-2 md:pt-0">

              <UsersListTable data={users} />

            </div>
          </div>
        </div>
      </div>
  );
}
