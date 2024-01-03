import Link from "next/link";
import { Button } from "../button";
import { KeyRound } from "lucide-react";
import SignOut from "../sign-out";


export default async function ProfileTable({name, email}: {name: string, email:string}) {

  return (
    <div className="flow-root border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-xl relative h-96">
      <div className="bg-blue-500 h-52 rounded-t-xl">
      </div>
      <div className="bg-blue-600 rounded-full absolute top-24 left-5 h-32 w-32 border-4 border-white">
      </div>
        <div className="w-full rounded-b-xl bg-white dark:bg-gray-800 p-4 py-2">
          <div className="flex flex-col items-start md:ml-8 mt-2">
              <h2 className="font-bold text-xl capitalize">{name}</h2>
              <p className="text-black/60 dark:text-white/80">{email}</p>
              <p className="text-black/60 dark:text-white/80">Buenos Aires. AR ∙ <a className="text-blue-600 hover:text-blue-500" href="#">Informacion de contacto</a></p>
              <Link className="mt-2 md:mt-4 rounded-xl gap-2 flex flex-row bg-blue-500 hover:bg-blue-400 text-white p-2 font-bold" href="/dashboard/settings/changepassword"><KeyRound /><p>Cambiar contraseña</p></Link>
              <div className="absolute bottom-30 right-3"><SignOut className="bg-red-500 hover:bg-red-400 p-2 rounded-xl text-white font-bold">Cerrar sesión</SignOut></div>
          </div>
        </div>
    </div>
  )
}