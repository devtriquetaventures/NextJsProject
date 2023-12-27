import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';

export default function Footer() {
  return (
    <>
      <div className="flex justify-between pr-8 bg-gray-100 dark:bg-gray-800 shadow-xl h-22 p-2">
        <div className='flex justify-center pt-3'>
        <p>© Copyright 2023 - Desarrollado por <span><a className='text-blue-500' href="#">Triqueta Software Solutions</a></span>. Todos los derechos reservados.</p>
        </div>
          <form className='' action={async () => {
              'use server';
              await signOut();
            }}>
            <button className="flex w-full grow items-center justify-center gap-2 rounded-md bg-gray-700 text-white dark:bg-white dark:text-black p-3 text-sm font-medium md:flex-none md:justify-start transition-all">
              <PowerIcon className="w-6" />
              <div className="hidden md:block">Sign Out</div>
            </button>
          </form>
      </div>
    </>
  );
}