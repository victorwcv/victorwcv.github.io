import { motion } from 'framer-motion';
import { Icon } from '@/icons/icons';

export const ScrollTopArrow: React.FC<{isInView: boolean}> = ({isInView}) => {
  return (
    <motion.div
      className="fixed bottom-2 right-2 cursor-pointer flex items-center justify-center lg:w-14 w-8 lg:h-16 shadow h-10 bg-accent-500 text-text-primary z-30 rounded "
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      initial={{ x: '0', opacity: 0 }}
      animate={{ x: isInView ? '200%' : '0', opacity: isInView ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <Icon.arrowUp className="lg:text-2xl text-lg text-white" />
    </motion.div>
  );
};
