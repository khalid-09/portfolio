import Link from 'next/link';
import { motion } from 'framer-motion';
import Backdrop from './backdrop';

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
  const handleLinkClick = () => {
    onClose();
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
              <Link href="/#home" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/#about" onClick={handleLinkClick}>
                About
              </Link>
            </li>
            <li>
              <Link href="/#projects" onClick={handleLinkClick}>
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default MobileNav;
