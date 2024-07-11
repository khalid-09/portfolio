import { motion } from 'framer-motion';

const BackdropVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.1,
      duration: 0.3,
    },
  },
};

interface BackdropProps {
  onClick: () => void;
}

const Backdrop = ({ onClick }: BackdropProps) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={BackdropVariants}
      onClick={onClick}
    />
  );
};

export default Backdrop;
