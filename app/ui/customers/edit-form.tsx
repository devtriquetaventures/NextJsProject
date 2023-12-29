'use client';

import { CustomerEditField } from '@/app/lib/definitions';
import { updateCustomer } from '@/app/lib/customer-actions';
import {
  AtSymbolIcon,
  CameraIcon,
  UserIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { useFormState } from 'react-dom';
import InputTable from '../input-table';
import Input from '../input';
import { useToast } from '@/app/lib/custom-hooks';

export default function EditCustomersForm({
  customer,
}: {
  customer: CustomerEditField;
}) {
  const initialState = { message: null, errors: {} };
  const updateCustomerById = updateCustomer.bind(null, customer.id);
  const [state, dispatch] = useFormState(
    (prevState : any, formData : any) => updateCustomerById(prevState, formData),
    initialState
  );

  useToast(state, state.succes, "¡Cliente actualizado correctamente!", "/dashboard/customers")

  return (
    <form action={dispatch}>  
      <InputTable>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Introduce el nombre del cliente"
            aria-describedby="name-error"
            defaultValue={customer.name}
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
            defaultValue={customer.email}
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
            defaultValue={customer.image_url}
            icon={<CameraIcon />}
            label="Foto del cliente"
            state={state}   
          />
        </InputTable>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/customers"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Editar cliente</Button>
      </div>
    </form>
  );
}

