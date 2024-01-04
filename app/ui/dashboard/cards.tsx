import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { fetchCardData } from '@/app/lib/data';

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {

  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}

      <Card iconClass='text-green-300' title="Recolectado" value={totalPaidInvoices} type="collected" />
      <Card iconClass='text-yellow-300' title="Pendiente" value={totalPendingInvoices} type="pending" />
      <Card iconClass='text-blue-300' title="Total de facturas" value={numberOfInvoices} type="invoices" />
      <Card
        iconClass='text-violet-300'
        title="Total de clientes"
        value={numberOfCustomers}
        type="customers"
      />
    </>
  );
}

export function Card({
  title,
  value,
  type,
  iconClass
}: {
  title: string;
  value: number | string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
  iconClass?: string;
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm dark:bg-gray-900">
      <div className="flex p-4">
        {Icon ? <Icon className={`h-5 w-5 text-gray-700 ${iconClass}`} /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className='
          truncate rounded-xl bg-white dark:bg-gray-800 px-4 py-8 text-center text-2xl'
      >
        {value}
      </p>
    </div>
  );
}
