
import { CurrencyDollarIcon } from "@heroicons/react/24/outline"
import { Button } from "../button"
import Link from "next/link"


export default function CustomerForm(customer: string, defaultValueName: string, defaultValueEmail: string, defaultValueImageURL: string, dispatch: string) {
  return (
  <form action={dispatch}>  
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Enter new full name of customer
          </label>
          <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                defaultValue={defaultValueName}
                placeholder="Enter name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
        </div>

        {/* Customer Email */}
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Enter the new email of customer
          </label>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  defaultValue={defaultValueEmail}
                  placeholder="Enter email"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                />
                <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
          </div>
        </div>

        {/* Customer Image */}
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Enter the new image of customer
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="image_url"
                  name="image_url"
                  type="text"
                  defaultValue={defaultValueImageURL}
                  placeholder="Enter a image URL"
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
          href="/dashboard/customers"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Edit customer</Button>
      </div>
    </form>
    )
}