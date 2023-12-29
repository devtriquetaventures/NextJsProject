import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts'
import Image  from 'next/image'
import DarkMode from './ui/darkmode';


export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 dark:bg-gray-800">
      <div className="flex h-20 shrink-0 items-center justify-between rounded-lg bg-black dark:bg-gray-900 p-4 md:h-52">
        <Image
          src="/tense.png"
          width={400}
          height={760}
          className="hidden md:block"
          alt="Screenshots of the dashboard project showing desktop version"
        />
        <div>
          <DarkMode />
        </div>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row justify-center">
        <div className="flex flex-col justify-center items-center gap-6 rounded-lg bg-white dark:bg-gray-800 px-6 py-10 md:w-2/5 md:px-20 text-center">
          <p className={`text-xl text-gray-800 dark:text-white md:text-3xl md:leading-normal`}>

            <strong>Bienvenido a tense.</strong> 
            
          </p>
          <Link
            href="/login"
            className="flex items-center justify-center gap-5 rounded-lg bg-black dark:bg-white px-6 py-3 text-sm font-medium text-white dark:text-black transition-colors hover:bg-blue-400 dark:hover:bg-blue-400 md:text-base"
          >
            <span>Iniciar Sesion</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
      </div>
    </main>
  );
}
