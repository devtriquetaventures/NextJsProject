'use client'

import Link from 'next/link';
import { useFormState } from 'react-dom'
import { CameraIcon, CurrencyDollarIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { CreateUser } from '@/app/lib/users-actions';

export default function Form() {
  const initialState = { message: null, errors: {} };

  const [state, dispatch] = useFormState(CreateUser, initialState);

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">

        {/* Username */}
        <div className="mb-4">
          <label htmlFor="username" className="mb-2 block text-sm font-medium">
            Username
          </label>
          <div className="relative">
          <input
                id="username"
                name="username"
                type="text"
                placeholder="Enter username"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="username-error"
              />
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
            <div id="username-error" aria-live="polite" aria-atomic="true">
              {state.errors?.username &&
                state.errors.username.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
        </div>

        {/* User Email */}
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter the email of user"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="email-error"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
            <div id="email-error" aria-live="polite" aria-atomic="true">
              {state.errors?.email &&
                state.errors.email.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
        </div>

        {/* User Password */}
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Password
          </legend>
          <div>

          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter the password"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="password-error"
              />
              <CameraIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>

            <div id="password-error" aria-live="polite" aria-atomic="true">
              {state.errors?.password &&
                state.errors.password.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>

          </div>
        </fieldset>

      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/users"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create User</Button>
      </div>
    </form>
  );
}
