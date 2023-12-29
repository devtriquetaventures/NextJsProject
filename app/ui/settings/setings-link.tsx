
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function SettingsLink( {className, children}: {className?: string, children?: string} ) {
  
  return(
    <Link
      href='/dashboard/settings'
      className="flex flex-column items-center"
    >
      <Cog6ToothIcon className={className} />
      <span>{children}</span>
    </Link>
  )
}