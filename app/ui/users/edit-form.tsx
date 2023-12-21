'use client';

import { User } from '@/app/lib/definitions';
import { updateUser } from '@/app/lib/users-actions';
import {
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { useFormState } from 'react-dom';

export default function EditUsersForm({
  user,
}: {
  user: User;
}) {
  const initialState = { message: null, errors: {} };
  const updateUserById = updateUser.bind(null, user.id);
  const [state, dispatch] = useFormState(updateUserById, initialState);

  return (
    <form action={dispatch}>  
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Username */}
        <div className="mb-4">
          <label htmlFor="username" className="mb-2 block text-sm font-medium">
            Enter new username
          </label>
          <div className="relative">
              <input
                id="username"
                name="username"
                type="text"
                defaultValue={user.name}
                placeholder="Enter username"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
        </div>

        {/* user Email */}
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            New user email
          </label>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  defaultValue={user.email}
                  placeholder="Enter email"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                />
                <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
          </div>
        </div>

        {/* user Image */}
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            New user password
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  defaultValue=""
                  placeholder="Enter the password"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                />
                <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
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
        <Button type="submit">Edit user</Button>
      </div>
    </form>
  );
}

