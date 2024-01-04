import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import DarkMode from './darkmode';
import SignOut from './sign-out';
import ProfileLink from './profile/profile-link';
import SettingsLink from './settings/setings-link';
import Link from 'next/link';
import { PowerIcon, User } from 'lucide-react';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';

export default function UserIcon() {
  return (
    <div className="mr-4 mt-4 h-12 w-12 justify-start justify-items-center md:flex ">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Image
            src={'/customers/triqueta.png'}
            className="rounded-xl"
            alt={`triqueta profile picture`}
            width={64}
            height={64}
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link
            href='/dashboard/profile'
            className="flex flex-column items-center w-full transition-colors hover:text-black hover:bg-gray-300 rounded-sm"
          >
            <DropdownMenuItem className='w-full cursor-pointer'>
              <User className="mr-2 h-4 w-4" /> <span>Perfil</span>
            </DropdownMenuItem>
          </Link>
          <Link
            href='/dashboard/settings'
            className="flex flex-column items-center w-full transition-colors hover:text-black hover:bg-gray-300 rounded-sm"
          >
            <DropdownMenuItem className='w-full cursor-pointer'>
              <Cog6ToothIcon className="mr-2 h-4 w-4" /> <span>Configuracion</span>
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem className='transition-colors hover:text-black hover:bg-gray-300 rounded-sm'>
            <DarkMode className="mr-2 h-4 w-4">Cambiar Modo</DarkMode>
          </DropdownMenuItem>
          <SignOut>
            <DropdownMenuItem className='transition-colors hover:text-black hover:bg-gray-300 rounded-sm cursor-pointer'>
              <PowerIcon className="mr-2 h-4 w-4" /><span>Desconectarse</span>
            </DropdownMenuItem>
          </SignOut>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
