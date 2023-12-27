import Header from '@/app/ui/dashboard/header';
import { Button } from '../ui/button';
import { SunIcon } from '@heroicons/react/24/outline';
import DarkMode from '../ui/darkmode';
import Footer from '../ui/dashboard/footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col justify-between md:flex-col md:overflow-hidden bg-white dark:bg-gray-900 transition-all dark:text-white">
      <Header />
      <div className="">
        {children}
      </div>
        <Footer />
    </div>
  );
}