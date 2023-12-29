'use client';

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

import { useEffect, useState } from 'react';


export default function DarkMode({ className, children }: { className?: string, children?: React.ReactNode} ) {
  const [selectedTheme, setSelectedTheme] = useState('');

  useEffect(function () {
    const appTheme = localStorage.getItem('theme')
    appTheme && setSelectedTheme(appTheme)
  }, []);

  useEffect(function () {
    const appTheme = localStorage.getItem('theme')

    if (appTheme === 'dark') {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [selectedTheme]);

  const handleClick = () => {
    if (selectedTheme === 'light') {
      localStorage.setItem('theme', 'dark');
      setSelectedTheme('dark');
    } else {
      localStorage.setItem('theme', 'light');
      setSelectedTheme('light');
    }
  };
  return (
    <div className="flex justify-end rounded-lg">
          <button onClick={handleClick} className='flex flex-column items-center'>
            {selectedTheme === 'light' ? (
              <span><SunIcon className={`${className}`} /></span>
            ) : (
              <span><MoonIcon className={`${className}`} /></span>
            )}
            <span> {children} </span>
            </button>
    </div>
  );
}
