import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';

export default function Footer() {
  return (
    <>
      <div className="flex justify-center bg-gray-100 dark:bg-gray-800 p-2">
        <div className='flex flex-col justify-center text-xs'>
          <p>© Copyright 2023 - Desarrollado por <span><a className='text-blue-500' href="#">Triqueta Software Solutions</a></span>. Todos los derechos reservados.</p>
        </div>
      </div>
    </>
  );
}