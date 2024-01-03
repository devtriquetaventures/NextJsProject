import { FormattedCustomersTable } from "@/app/lib/definitions";

export default function ProfileCustomersTable({
    customer
  }: {
    customer: FormattedCustomersTable;
  }) { 

    return(
        <div className="flow-root border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-xl relative h-96">
      <div className="bg-blue-500 h-52 rounded-t-xl">
      </div>
      <div className="bg-blue-600 rounded-full absolute top-24 left-5 h-32 w-32 border-4 border-white">
      </div>
        <div className="w-full rounded-b-xl bg-white dark:bg-gray-800 p-4 py-2">
          <div className="flex flex-col items-start md:ml-8 mt-2">
              <h2 className="font-bold text-xl capitalize">{customer.name}</h2>
              <p className="text-black/60 dark:text-white/80">{customer.email}</p>
              <p className="text-black/60 dark:text-white/80">Total pagado: <span>{customer.total_paid}</span></p>
              <p className="text-black/60 dark:text-white/80">Total pendiente: <span>{customer.total_pending}</span></p>
          </div>
        </div>
    </div>
    )
  }