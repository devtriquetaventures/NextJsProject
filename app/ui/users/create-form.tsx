'use client'

import Link from 'next/link';
import { useFormState } from 'react-dom'
import { CameraIcon, CurrencyDollarIcon, EnvelopeIcon, LockClosedIcon, UserCircleIcon, UserIcon } from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { CreateUser } from '@/app/lib/users-actions';
import Input from '../input';
import InputTable from '../input-table';
import { useToast } from '@/app/lib/custom-hooks';
import { useEffect } from 'react';
import { toast } from '@/components/ui/use-toast';
import { redirect } from 'next/navigation';

export default function Form() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(
    (prevState : any, formData : any) => CreateUser(prevState, formData),
    initialState
  );

    useToast(state, state.succes, "¡Usuario creado correctamente!", "/dashboard/users")


  return (
    <form action={dispatch}>

        {/* Username */}
        <InputTable>
          <Input
            id="username"
            name="username"
            type="text"
            placeholder="Enter username"
            aria-describedby="username-error"
            icon={<UserIcon />}
            label="Username"         
            state={state}     
          />
        </InputTable>

        {/* User Email */}
        <InputTable>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter the email of user"
            aria-describedby="email-error"
            icon={<EnvelopeIcon />}
            state={state}   
            label="Email"
          />
        </InputTable>

        {/* User Password */}
        <InputTable>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter the password"
            aria-describedby="password-error"
            icon={<LockClosedIcon />}
            label="Password"
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
        <Button type="submit">Create User</Button>
      </div>
    </form>
  );
}
