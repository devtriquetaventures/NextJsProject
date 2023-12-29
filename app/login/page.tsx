import TenseLogo from '@/app/ui/tense-logo';
import LoginForm from '@/app/ui/login-form';

import { Metadata } from 'next';
import DarkMode from '../ui/darkmode';
 
export const metadata: Metadata = {
  title: 'Login'
};

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center md:h-screen dark:bg-gray-900">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full justify-between items-center rounded-lg bg-gray-700 p-3 md:h-18">
          <div className="w-32 text-white md:w-36">
            <TenseLogo />
          </div>
          <div>
            <DarkMode />
          </div>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}