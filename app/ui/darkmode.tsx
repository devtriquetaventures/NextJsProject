'use client'

import { SunIcon } from "@heroicons/react/24/outline";

export default function DarkMode () {

  const handleClick = () => {
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className='flex justify-end'>
          <button onClick={handleClick} className=''><SunIcon className="h-6 md:ml-4 text-white" /></button>
        </div>
  )
}