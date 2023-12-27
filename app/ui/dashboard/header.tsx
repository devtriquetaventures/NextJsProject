import Image from 'next/image';
import NavLinks from '@/app/ui/dashboard/nav-links';
import TenseLogo from '@/app/ui/tense-logo';
import DarkMode from '../darkmode';

export default function Header() {
  return (
    <div className="flex justify-items-center flex-row md:pl-6 md:px-2 bg-gradient-to-tr from-sky-900 via-black to-purple-900">
        <div className="w-26 md:w-24 flex justify-center justify-items-center ml-2">
          <TenseLogo />
        </div>
      <div className="flex h-20 grow flex-row justify-start justify-items-center">
        <div className='flex justify-start justify-items-center pt-5 pl-4'>
          <NavLinks />
        </div>
        <div className="hidden grow rounded-md md:block"></div>
          <div className='flex justify-center justify-items-center mr-5'>
            <DarkMode />
          </div>
        <div className='flex justify-start justify-items-center h-12 w-12 mt-4 mr-4'>
          <Image
               src={'/customers/emil-kowalski.png'}
               className="rounded-full"
               alt={`evil rabbits profile picture`}
               width={64}
               height={64}
          />             
        </div>
      </div>
    </div>
  );
}
