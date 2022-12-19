import { Bars3Icon } from '@heroicons/react/24/solid'
import Link from 'next/link';
import DarkModeButton from './DarkModeButton';
import NavLinks from './NavLinks';
import SearchBox from './SearchBox';

function Header() {
  return (
    <header>
        <div className="grid grid-cols-3 items-center p-10">
            <Bars3Icon className="w-8 h-8 cursor-pointer"/>
            <Link href='/' prefetch={false}>
            <h1 className='font-serif text-2xl md:text-4xl text-center'>The <span className='underline decoration-6 decoration-red-400 uppercase'>Latest</span> News</h1>
            </Link>

            <div className='flex justify-end items-center space-x-2'>

        {/* Dark mode */}
          <DarkModeButton />
        <button className='hidden md:inline shadow-md bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800 hover:shadow-xl active:scale-90 transition duration-150'>Subscribe Now</button>
    
            </div>
        </div>
        <NavLinks />
        <SearchBox />
    </header>
  )
}

export default Header;


