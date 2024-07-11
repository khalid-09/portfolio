'use client';

import {
  GitHubLogoIcon,
  HamburgerMenuIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence } from 'framer-motion';
import MobileNav from './mobile-nav';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [isMenuOpen]);

  const handleClick = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <div className="relative">
      <div className="bg-white flex items-center justify-center">
        <header className="md:px-3 px-7 shadow-lg shadow-zinc-900 md:-translate-x-0 py-3 md:py-7 fixed md:top-1/2 top-4 md:left-4 md:-translate-y-20 z-30 border border-zinc-700 border-opacity-30 bg-zinc-900 md:w-fit rounded-3xl">
          <nav className="flex flex-row md:flex-col gap-6">
            <Link href="https://x.com/stan8783">
              <TwitterLogoIcon className="text-zinc-100 w-5 h-5" />
            </Link>
            <Link href="https://github.com/khalid-09">
              <GitHubLogoIcon className="text-zinc-100 w-5 h-5" />
            </Link>
            <Link href="https://www.linkedin.com/in/khalid-ansari-917357230/">
              <LinkedInLogoIcon className="text-zinc-100 w-5 h-5" />
            </Link>
            <HamburgerMenuIcon
              onClick={handleClick}
              className="text-zinc-100 cursor-pointer w-5 h-5 md:hidden block"
            />
          </nav>
        </header>
      </div>
      {isMounted &&
        createPortal(
          <AnimatePresence>
            {isMenuOpen && <MobileNav key="mobile-nav" onClose={handleClick} />}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
};

export default Navbar;
