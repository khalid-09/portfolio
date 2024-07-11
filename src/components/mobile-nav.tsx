import Link from 'next/link';
import { motion } from 'framer-motion';
import Backdrop from './backdrop';
import { useLenis } from '@/libs/lenis';

const MobileNavVariants = {
  hidden: { y: -200 },
  visible: {
    y: 0,
    transition: {
      delay: 0.1,
      type: 'spring',
      ease: 'easeInOut',
      stiffness: 75,
    },
  },
  exit: {
    y: -200,
    transition: {
      delay: 0.1,
      type: 'spring',
      ease: 'easeInOut',
      stiffness: 75,
    },
  },
};

interface MobileNavProps {
  onClose: () => void;
}

const MobileNav = ({ onClose }: MobileNavProps) => {
  const lenis = useLenis();

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    target: string
  ) => {
    e.preventDefault();
    onClose();
    const element = document.querySelector(target) as HTMLElement;
    if (element && lenis) {
      lenis.scrollTo(element);
    }
  };

  return (
    <>
      <Backdrop onClick={onClose} />
      <motion.div
        className="fixed top-20 w-full flex justify-center z-20"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={MobileNavVariants}
      >
        <div className="bg-zinc-900 text-zinc-100 border border-zinc-700 border-opacity-30 rounded-full py-3 px-6 w-fit">
          <ul className="flex gap-5 flex-wrap">
            <li>
              <Link href="/#home" onClick={e => handleLinkClick(e, '#home')}>
                Home
              </Link>
            </li>
            <li>
              <a href="/#about" onClick={e => handleLinkClick(e, '#about')}>
                About
              </a>
            </li>
            <li>
              <a
                href="/#projects"
                onClick={e => handleLinkClick(e, '#projects')}
              >
                Projects
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default MobileNav;
