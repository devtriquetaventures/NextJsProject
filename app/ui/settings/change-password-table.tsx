'use client';

import { UserEmailField } from '@/app/lib/definitions';
import { updateUserByEmail } from '@/app/lib/users-actions';
import { LockClosedIcon, UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { useFormState } from 'react-dom';
import Input from '../input';
import InputTable from '../input-table';
import { toast } from '@/components/ui/use-toast';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useToast } from '@/app/lib/custom-hooks';

export default function ChangePasswordTable( { user }: { user: UserEmailField } ) {

  
  const initialState = { message: null, errors: {} };
  const updateUserByEmailAsiId = updateUserByEmail.bind(null, user.email);

  const [state, dispatch] = useFormState(
    (prevState : any, formData : any) => updateUserByEmailAsiId(prevState, formData),
    initialState
  );

  useToast(state, state.succes, "Contraseña cambiada exitosamente", "/dashboard/settings")

  return (
    <form action={dispatch}>
      <div className="p-2 py-4">
        <h1 className="text-xl font-bold">Cambia tu contraseña</h1>
        <h3 className="text-sm dark:text-gray-300 pt-3">Si deseas cambiar tu contraseña, primero introduce tu contraseña de usuario actual y luego la nueva contraseña deseada</h3>
      </div>
      <InputTable>
        <Input
          id="oldPassword"
          name="oldPassword"
          type="password"
          defaultValue=""
          placeholder="Introduce la anterior contraseña"
          icon={<LockClosedIcon />}
          label="Anterior contraseña"
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
            placeholder="Introduce la nueva contraseña"
            icon={<LockClosedIcon />}
            label="Nueva contraseña"
            state={state}
          />
        </InputTable>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/settings"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200 active:transform active:translate-y-1"
        >
          Cancelar
        </Link>
        <Button type="submit">Editar usuario</Button>
      </div>
    </form>
  );
}