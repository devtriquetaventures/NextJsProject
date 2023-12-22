import { ReactElement } from "react";

export default function Input({id, name, type, defaultValue, placeholder, className, icon, value, label, onChange, state} : Input ) {
  return (
    <>
      {label &&
        <label htmlFor={name} className="mb-2 block text-sm font-medium">
          {label}
        </label>
      }
      <div className="relative">
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          defaultValue={defaultValue}
          placeholder={placeholder}
          className={`peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 ${className}`}
        />
        {icon}
      </div>
      <div id={`${name}-error`} aria-live="polite" aria-atomic="true">
        {state?.errors?.[name] &&
          state?.errors[name].map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
    </>
  )
}

type Input = {
  id: string;
  name: string;
  type: string;
  defaultValue?: string;
  placeholder?: string;
  className?: string;
  value?: string;
  icon?: ReactElement;
  label?: string;
  state?: any;
  onChange?: () => void
}