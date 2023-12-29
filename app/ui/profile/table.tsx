

export default async function ProfileTable({name, email}: {name: string, email:string}) {

  return (
    <div className="flow-root dark:bg-gray-700 rounded-lg p-4">
      <div className="py-2">
        <h1 className="text-xl font-bold">Informacion personal</h1>
      </div>
      <div className="p-2">
        <h3>Bienvenido {name}</h3>
      </div>
      <div>
          <div className=" w-full rounded-md bg-white dark:bg-gray-800 p-4 py-2">
            <div className="flex items-center justify-between">
              <div>
                 <div className="font-bold dark:text-white">
                   <h4>Tu cuenta</h4>
                 </div>
                <div className="flex items-center p-2">
                    <p><span className="underline underline-offset-4">Nombre</span>: {name}</p>  
                </div>
                <p className="text-gray-500 dark:text-gray-400 pb-2 px-2">
                  <span className="underline underline-offset-4">Email</span>: {email}
                </p>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}