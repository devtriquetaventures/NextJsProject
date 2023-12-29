import { PowerIcon } from "@heroicons/react/24/outline";
import { signOut } from '@/auth';


 
 export default function SignOut( {className, children}: {className?:string, children?:React.ReactNode}) {

  return (
  <form className='flex justify-end' action={async () => {
      'use server';
      await signOut();
    }}>
      <button className="flex flex-column items-center">
        <span><PowerIcon className={className} /></span>     
        <span>{children}</span>
      </button>     
  </form>
  )
}