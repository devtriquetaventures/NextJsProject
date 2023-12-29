import { ReactElement } from "react";

export function Table( { children }: { children: ReactElement } ) {

  return(
    <table className="hidden min-w-full rounded-md text-gray-900 md:table md:p-4">
      {children}
    </table>
  )
}

export function TableHead( { children }: { children: React.ReactNode} ) {
  return(
    <thead className="rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white text-left text-sm font-normal">
      {children}
    </thead>
  )
}

export function TableRow( { children }: { children: React.ReactNode} ) {
  return(
    <tr>
      {children}
    </tr>
  )
}

export function TableHeaderCell( { children, className }: { children: React.ReactNode, className?: string;} ) {
  
  return(
    <th scope="col" className={`px-4 py-3 font-medium ${className}`}>
      {children}
    </th>
  )
}

export function LastTableHeaderCell( { children }: { children: React.ReactNode} ) {
  
  return(
    <th scope="col" className="px-4 py-3 font-medium flex justify-end">
      {children}
    </th>
  )
}

export function TableBody( { children }: { children: React.ReactNode} ) {
  
  return(
    <tbody className="divide-y divide-gray-200 text-gray-900">
      {children}
    </tbody>
  )
}

export function TableCell( { children, className }: { children: React.ReactNode, className?: string;} ) {
  
  return(
    <td className={`whitespace-nowrap bg-white dark:bg-gray-800 dark:text-white px-4 py-3 text-sm ${className}`}>
      {children}
    </td>
  )
}

export function LastTableCell( { children }: { children: React.ReactNode} ) {
  
  return(
    <td className="flex justify-end gap-2 whitespace-nowrap bg-white dark:bg-gray-800 dark:text-white px-4 py-3 text-sm group-first-of-type:rounded-tr-md group-last-of-type:rounded-br-md">
      {children}
    </td>
  )
}

export function Text( { children, className }: { children: React.ReactNode, className?: string;} ) {
  
  return(
    <p className={className}>
      {children}
    </p>
  )
}