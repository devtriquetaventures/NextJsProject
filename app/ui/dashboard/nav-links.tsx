'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  UserIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Facturas', href: '/dashboard/invoices', icon: DocumentDuplicateIcon},
  { name: 'Clientes', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname(); 
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex mx-1 h-10 p-2 justify-items-center justify-center text-white hover:bg-gray-400/50 rounded-lg',
              {
                'bg-gray-400/50 rounded-lg': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6 md:hidden" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
