import {
  GitHubLogoIcon,
  HamburgerMenuIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="md:px-3 px-7 left-1/2 -translate-x-24 md:-translate-x-0 py-3 md:py-7 fixed md:top-1/2 top-4  md:left-4 md:-translate-y-10 z-10  border border-zinc-400 border-opacity-30 bg-zinc-900 md:w-fit rounded-3xl">
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
        <HamburgerMenuIcon className="text-zinc-100 w-5 h-5 md:hidden block" />
      </nav>
    </header>
  );
};

export default Navbar;
