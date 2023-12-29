'use client';

import { UserEditField } from '@/app/lib/definitions';
import { updateUser } from '@/app/lib/users-actions';
import { EnvelopeIcon, LockClosedIcon, UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { useFormState } from 'react-dom';
import Input from '../input';
import InputTable from '../input-table';
import { useToast } from '@/app/lib/custom-hooks';

export default function EditUsersForm({
  user,
}: {
  user: UserEditField;
}) {
  const initialState = { message: null, errors: {} };
  const updateUserById = updateUser.bind(null, user.id);
  const [state, dispatch] = useFormState(
    (prevState : any, formData : any) => updateUserById(prevState, formData),
    initialState
  );

  useToast(state, state.succes, "¡Usuario actualizado correctamente!", "/dashboard/users")

  return (
    <form action={dispatch}>
        {/* Username */}
        <InputTable>
          <Input
            id="username"
            name="username"
            type="text"
            defaultValue={user.name}
            placeholder="Enter username"
            icon={<UserIcon />}
            label="Username"
            state={state}
          />
        </InputTable> 

        {/* user Email */}
        <InputTable>
          <Input
            id="email"
            name="email"
            type="email"
            defaultValue={user.email}
            placeholder="Enter email"
            icon={<EnvelopeIcon  />}
            label="Email"
            state={state}
          />
      </InputTable>

      <InputTable>
        <Input
          id="oldPassword"
          name="oldPassword"
          type="password"
          defaultValue=""
          placeholder="Enter the old password"
          icon={<LockClosedIcon />}
          label="Old password"
          state={state}
        />
      </InputTable>

        {/* New Password */}
        <InputTable>
          <Input
            id="password"
            name="password"
            type="password"
            defaultValue=""
            placeholder="Enter the password"
            icon={<LockClosedIcon />}
            label="New Password"
            state={state}
          />
        </InputTable>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/users"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200 active:transform active:translate-y-1"
        >
          Cancel
        </Link>
        <Button type="submit">Edit user</Button>
      </div>
    </form>
  );
}

