import { fetchUserById } from "@/app/lib/users-data"
import { auth } from "@/auth"
import { lusitana } from "../fonts"
import Link from "next/link"
import { Button } from "../button"
import { PencilIcon } from "@heroicons/react/24/outline"


export default async function SettingsTable({name, email}: {name: string, email:string}) {

  return (
    <div className="mt-6 flow-root">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Settings
      </h1>
      <div>
        <h3>Welcome {name}</h3>
      </div>
      <div>
          <div className="mb-2 w-full rounded-md bg-white p-4">
            <div className="flex items-center justify-between border-b pb-4">
              <div>
                 <div className="p-5 font-bold  ">
                   <h4>Your account</h4>
                 </div>
                <div className="mb-2 flex items-center">
                  <div className="flex items-center gap-3">
                    <p>{name}</p>  
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  {email}
                </p>
              </div>
            </div>
          </div>
      </div>
      <div>
          <Link
          href="/dashboard/users"
          className="flex h-10 items-center rounded-lg bg-black px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 w-36"
        >
          <span className="hidden md:block">Edit Users</span>{' '}
          <PencilIcon className="h-5 md:ml-4" />
          </Link>
      </div>
    </div>
  )
}