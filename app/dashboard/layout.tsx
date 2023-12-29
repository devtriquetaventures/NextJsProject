import Header from '@/app/ui/dashboard/header';
import Footer from '../ui/dashboard/footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen justify-between flex-col bg-slate-100 dark:bg-gradient-to-t dark:from-gray-900 dark:to-gray-800 transition-all dark:text-white">

     <Header />

      <main className='grow p-2 md:p-6 bg-slate-100 dark:bg-gradient-to-t dark:from-gray-900 dark:to-gray-800 transition-all'>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}