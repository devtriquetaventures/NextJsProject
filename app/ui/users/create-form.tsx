'use client'

import Link from 'next/link';
import { useFormState } from 'react-dom'
import { CameraIcon, CurrencyDollarIcon, EnvelopeIcon, LockClosedIcon, UserCircleIcon, UserIcon } from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { CreateUser } from '@/app/lib/users-actions';
import Input from '../input';

export default function Form() {
  const initialState = { message: null, errors: {} };

  const [state, dispatch] = useFormState(CreateUser, initialState);

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">

        {/* Username */}
        <div className="mb-4">
          <div className="relative">
          <Input
                id="username"
                name="username"
                type="text"
                placeholder="Enter username"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="username-error"
                icon={<UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />}
                label="Username"         
                state={state}     
              />
          </div>
        </div>

        {/* User Email */}
        <div className="mb-4">
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter the email of user"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="email-error"
                icon={<EnvelopeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />}
                state={state}   
                label="Email"
              />
            </div>
          </div>
        </div>

        {/* User Password */}
          <div>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter the password"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  aria-describedby="password-error"
                  icon={<LockClosedIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />}
                  label="Password"
                  state={state}   
                />
              </div>
            </div>
          </div>

      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/users"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200 active:transform active:translate-y-1"
        >
          Cancel
        </Link>
        <Button type="submit">Create User</Button>
      </div>
    </form>
  );
}
