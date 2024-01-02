'use client'

import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/invoices-actions';
import Link from 'next/link';

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <form className="space-y-3" action={dispatch}>
      <div className="flex-1 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-white px-6 pb-4 pt-8">
        <h1 className={`mb-3 text-xl`}>
          Inicia sesion para continuar.
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900 dark:text-white"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 dark:bg-gray-900 dark:border-none py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 dark:placeholder:text-gray-400"
                id="email"
                type="email"
                name="email"
                placeholder="Introduce tu email"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 dark:text-gray-200 peer-focus:text-gray-900 dark:peer-focus:text-gray-200" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900 dark:text-white"
              htmlFor="password"
            >
              Contraseña
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 dark:bg-gray-900 dark:border-none py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 dark:placeholder:text-gray-400"
                id="password"
                type="password"
                name="password"
                placeholder="Introduce tu contraseña"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 dark:text-gray-200 peer-focus:text-gray-900 dark:peer-focus:text-gray-200" />
            </div>
          </div>
        </div>
        <div className='flex justify-between gap-1'>
        <LoginButton />
        <Cancel />
        </div>
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="mt-4 w-full bg-blacl" aria-disabled={pending}>
      Iniciar sesion <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  )}

  function Cancel() {

    return (
      <Link href={'/'}>
        <Button className="mt-4 w-full bg-gray-500 hover:bg-gray-400" >Cancelar</Button>
      </Link>
    )
  }

