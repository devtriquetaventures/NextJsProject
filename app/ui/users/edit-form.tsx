'use client';

import { UserEditField } from '@/app/lib/definitions';
import { updateUser } from '@/app/lib/users-actions';
import { CurrencyDollarIcon, EnvelopeIcon, LockClosedIcon, UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { useFormState } from 'react-dom';
import Input from '../input';

export default function EditUsersForm({
  user,
}: {
  user: UserEditField;
}) {
  const initialState = { message: null, errors: {} };
  const updateUserById = updateUser.bind(null, user.id);
  const [state, dispatch] = useFormState(updateUserById, initialState);


  console.log(state)
  return (
    <form action={dispatch}>  
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Username */}
        <div className="mb-4">
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="relative mt-2 rounded-md">
              <div className="relative">
              <Input
                id="username"
                name="username"
                type="text"
                defaultValue={user.name}
                placeholder="Enter username"
                icon={<UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />}
                label="Username"
                state={state}
                />
              </div>
            </div>
          </div>
        </div>

        {/* user Email */}
        <div className="mb-4">
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  defaultValue={user.email}
                  placeholder="Enter email"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  icon={<EnvelopeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />}
                  label="Email"
                  state={state}
                />
              </div>
            </div>
          </div>
        </div>
      <div className="mb-4">
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <Input
                  id="oldPassword"
                  name="oldPassword"
                  type="oldPassword"
                  defaultValue=""
                  placeholder="Enter the old password"
                  icon={<LockClosedIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />}
                  label="Old password"
                  state={state}
                />
              </div>
            </div>
          </div>
        </div>

        {/* New Password */}
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  defaultValue=""
                  placeholder="Enter the password"
                  icon={<LockClosedIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />}
                  label="New Password"
                  state={state}
                />
              </div>
            </div>
          </div>
        </div>

        { state?.errors?.password && state?.errors?.password[0]}

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

