import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts'
import Image  from 'next/image'


export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-black p-4 md:h-52">
      <Image
        src="/tense.png"
        width={400}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row justify-center">
        <div className="flex flex-col justify-center items-center gap-6 rounded-lg bg-white px-6 py-10 md:w-2/5 md:px-20 text-center">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>

            <strong>Welcome to Tense.</strong> 
            
          </p>
          <Link
            href="/login"
            className="flex items-center justify-center gap-5 self-start rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
      </div>
    </main>
  );
}
