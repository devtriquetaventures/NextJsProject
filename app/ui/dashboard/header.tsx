import NavLinks from '@/app/ui/dashboard/nav-links';
import TenseLogo from '@/app/ui/tense-logo';
import DarkMode from '../darkmode';
import UserIcon from '../user-icon';

export default function Header() {
  return (
    <header className="flex flex-row md:pl-6 md:px-2 bg-gradient-to-tr from-sky-900 via-black to-purple-900">
        <div className="w-26 md:w-24 flex justify-center justify-items-center ml-2">
          <TenseLogo />
        </div>
      <div className="flex h-20 grow flex-row justify-start justify-items-center">
        <div className='flex justify-start justify-items-center pt-5 pl-8'>
          <NavLinks />
        </div>
        <div className="grow rounded-md md:block"></div>
          <div className='pr-10'>
          <UserIcon />
          </div>
          <div className='hidden'>
          <DarkMode />
          </div>
      </div>
    </header>
  );
}
