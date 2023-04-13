import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/logo.png';
import { useRouter } from 'next/router';
import { menuitems } from '@/utils/data';

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { pathname } = useRouter();

  return (
    <header className="flex flex-col lg:flex-row justify-between items-center my-5 md:py-4 md:my-0 w-full px-8 md:px-24">
      <div className="flex w-full lg:w-auto items-center justify-between">
        <Link href="/" className="text-4xl">
          {/* <span className="text-green-400">Think</span>
          <span className="font-bold text-slate-800">IT</span>
          <span className="text-green-400">Beyond</span> */}
          <Image
            src={Logo}
            alt="ThinkITBeyond logo"
            loading="eager"
            format="avif"
            className="w-64"
          />
        </Link>
        <div className="block lg:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="text-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-6 h-6 ${!navbarOpen ? 'block' : 'hidden'}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-6 h-6 ${navbarOpen ? 'block' : 'hidden'}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <nav
        className={`w-full lg:w-auto lg:flex lg:mt-0   md:py-0 ${
          navbarOpen ? 'block' : 'hidden'
        }`}
        x-transition
      >
        <ul className="flex flex-col lg:flex-row lg:gap-3">
          {menuitems.map((item) => (
            <>
              {!item.children && (
                <li>
                  <a
                    href={item.path}
                    className="flex lg:px-3 py-2 text-gray-600 hover:text-gray-900"
                  >
                    {item.title}
                  </a>
                </li>
              )}
            </>
          ))}
        </ul>
        <div className="lg:hidden flex items-center mt-3 gap-4">
          <Link
            href="/contact"
            className={`${
              !pathname.match(/^\/contact$/)
                ? 'block md:visible'
                : 'hidden md:invisible'
            } bg-primary text-white text-xl hover:bg-green-600 border-2 border-transparent rounded-md px-4 py-2 w-full text-center`}
          >
            Contact Us
          </Link>
        </div>
      </nav>
      <div>
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className={`${
              !pathname.match(/^\/contact$/) ? 'visible' : 'invisible'
            } bg-primary text-white text-xl hover:bg-green-600 border-2 border-transparent rounded-md px-4 py-2`}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};
