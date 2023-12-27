'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  UserIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Turnos', href: '/dashboard', icon: HomeIcon },
  { name: 'Caja', href: '/dashboard/invoices', icon: DocumentDuplicateIcon},
  { name: 'Clientes', href: '/dashboard/customers', icon: UserGroupIcon },
  // { name: 'Users', href: '/dashboard/users', icon: UserIcon },
  // { name: 'Settings', href: '/dashboard/settings', icon: Cog6ToothIcon },
];

export default function NavLinks() {
  const pathname = usePathname(); 
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex mr-10 h-10 p-2 justify-items-center justify-center text-white hover:bg-gray-400/50 rounded-lg',
              {
                'bg-gray-400/50 rounded-lg': pathname === link.href,
              },
            )}
          >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
