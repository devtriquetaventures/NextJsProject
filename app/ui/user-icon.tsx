import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import DarkMode from './darkmode';
import SignOut from './sign-out';
import ProfileLink from './profile/profile-link';
import SettingsLink from './settings/setings-link';

export default function UserIcon() {
  return (
    <div className="mr-4 mt-4 hidden h-12 w-12 justify-start justify-items-center md:flex ">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Image
            src={'/customers/evil-rabbit.png'}
            className="rounded-full"
            alt={`evil rabbits profile picture`}
            width={64}
            height={64}
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <ProfileLink className="mr-2 h-4 w-4">Perfil</ProfileLink>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <SettingsLink className="mr-2 h-4 w-4">Configuracion</SettingsLink>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <DarkMode className="mr-2 h-4 w-4">Cambiar Modo</DarkMode>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SignOut className="mr-2 h-4 w-4">Desconectarse</SignOut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
