import { User } from "lucide-react";
import Link from "next/link";

export default function ProfileLink( {className, children}: {className?: string, children?: string} ) {
  
  return(
    <Link
      href='/dashboard/profile'
      className="flex flex-column items-center w-full"
    >
      <User className={className} />
      <span>{children}</span>
    </Link>
  )
}