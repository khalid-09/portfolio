import { GitHubLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="font-bold text-4xl gap-4 flex-col flex items-center justify-center mb-16 text-zinc-200">
      <p> And that&apos;s all.</p>
      <Link
        className="text-base bg-zinc-900 rounded-full px-6 py-3 font-medium flex items-center gap-2"
        href="https://github.com/khalid-09/portfolio"
      >
        <span>Source Code | </span> <GitHubLogoIcon className="w-5 h-5" />
      </Link>
    </footer>
  );
};

export default Footer;
