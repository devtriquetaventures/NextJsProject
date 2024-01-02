import TenseLogo from '@/app/ui/tense-logo';
import LoginForm from '@/app/ui/login-form';

import { Metadata } from 'next';
import DarkMode from '../ui/darkmode';
import Link from 'next/link';
 
export const metadata: Metadata = {
  title: 'Login'
};

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[url('/pattern-light.svg')] dark:bg-[url('/pattern.svg')]">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4">
        <div className="flex h-20 w-full justify-center items-center rounded-lg bg-gray-900 p-3 md:h-18">
          <div className="w-32 text-white md:w-36">
            <TenseLogo />
          </div>
        </div>
        <LoginForm />
      </div>
      <div className='flex justify-end md:justify-start dark:text-white items-center transition-all absolute right-3 bottom-3 md:left-3'>
          <div className='md:bg-black md:dark:bg-white md:text-white md:dark:text-black md:px-3 md:py-1 md:rounded-lg md:hover:bg-slate-600 md:dark:hover:bg-gray-200 transition-all'><DarkMode className="h-10 p-1 w-auto font-bold"><span className='font-bold ml-1 hidden md:block'>Cambiar de modo</span></DarkMode></div>
      </div>
    </div>
  );
}