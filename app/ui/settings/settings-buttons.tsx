import { ChevronRight, User } from "lucide-react";
import Link from "next/link";

export default function SettingsButton( { href, icon, title, subtitle }: { href: string, icon: React.ReactNode, title?: string, subtitle?: string  } ) {

  return (
    <Link href={href}>
      <div className="bg-white dark:bg-gray-700 border:gray-100 rounded-lg p-4 flex justify-between items-center mx-2 shadow h-[6.5rem]">
        <div className="flex items-center space-x-4">
          <div className="border dark:border-gray-600 rounded-xl p-[5px]">
            <div className="bg-gray-100 dark:bg-gray-500 rounded-lg p-[4px]">
              {icon}
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">{title}</span>
            <span className="text-gray-500 dark:text-gray-400">{subtitle}</span>
          </div>
        </div>
        <ChevronRight />
      </div>
    </Link>
  );
}