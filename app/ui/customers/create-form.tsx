'use client'

import Link from 'next/link';
import { useFormState } from 'react-dom'
import { AtSymbolIcon, CameraIcon, UserIcon } from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { CreateCustomer } from '@/app/lib/customer-actions';  
import InputTable from '../input-table';
import Input from '../input';
import { useToast } from '@/app/lib/custom-hooks';

export default function Form() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(
    (prevState : any, formData : any) => CreateCustomer(prevState, formData),
    initialState
  );

  useToast(state, state.succes, "¡Cliente creado correctamente!", "/dashboard/customers")

  return (
    <form action={dispatch}>

        {/* Username */}
        <InputTable>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Introduce el nombre del cliente"
            aria-describedby="name-error"
            icon={<UserIcon />}
            label="Nombre del cliente"         
            state={state}     
          />
        </InputTable>

        {/* User Email */}
        <InputTable>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Introduce el email del cliente"
            aria-describedby="email-error"
            icon={<AtSymbolIcon />}
            state={state}   
            label="Email del cliente"
          />
        </InputTable>

        {/* User image_url */}
        <InputTable>
          <Input
            id="image_url"
            name="image_url"
            type="image_url"
            placeholder="Introduce una imagen URL"
            aria-describedby="image_url-error"
            icon={<CameraIcon />}
            label="Foto del cliente"
            state={state}   
          />
        </InputTable>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/customers"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200 active:transform active:translate-y-1"
        >
          Cancel
        </Link>
        <Button type="submit">Create User</Button>
      </div>
    </form>
  );
}
