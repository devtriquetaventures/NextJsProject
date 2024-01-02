import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts'
import Image  from 'next/image'
import DarkMode from './ui/darkmode';
import { Button } from './ui/button';



export default function Page() {
  return (
    <div className={`flex min-h-screen flex-col p-6 bg-[url('/pattern-light.svg')] dark:bg-[url('/pattern.svg')]`}>
      <div className="flex h-25 shrink-0 items-center justify-center rounded-lg bg-black dark:bg-gray-900  p-4 md:h-52">
        <Image
          src="/tense.png"
          width={300}
          height={660}
          className='h-16 w-auto'
          alt="Screenshots of the dashboard project showing desktop version"
        />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row justify-center">
        <div className="flex flex-col justify-center items-center gap-6 rounded-lg px-6 py-10 md:w-2/5 md:px-20 text-center">
          <p className={`text-xl dark:text-white md:text-3xl md:leading-normal`}>

            <strong>Bienvenido a tense.</strong> 
            
          </p>
          <Link
            href="/login"
            className="flex items-center justify-center gap-5 rounded-lg bg-black dark:bg-white px-6 py-3 text-sm font-medium text-white dark:text-black transition-colors hover:bg-slate-600 dark:hover:bg-gray-200 md:text-base"
          >
            <span>Iniciar Sesion</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
      </div>
      <div className='flex justify-end md:justify-start dark:text-white items-center transition-all absolute right-3 bottom-3 md:left-3'>
          <div className='md:bg-black md:dark:bg-white md:text-white md:dark:text-black md:px-3 md:py-1 md:rounded-lg md:hover:bg-slate-600 md:dark:hover:bg-gray-200 transition-all'><DarkMode className="h-12 p-1 w-auto font-bold"><span className='font-bold ml-1 hidden md:block'>Cambiar de modo</span></DarkMode></div>
      </div>
    </div>
  );
}
