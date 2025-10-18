import { motion } from 'motion/react';
import { useEffect } from 'react';

interface Props {
  progress: number;
}

const LoadingPage: React.FC<Props> = ({ progress }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 w-screen h-dvh bg-neutral-900 z-50 flex flex-col justify-center items-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <img
        src="/vc-logo.png"
        alt="VC logo"
        className="w-20 h-auto brightness-125 mb-6"
      />
      <progress
        className="progress progress-primary w-56"
        value={progress}
        max="100"
      ></progress>
    </motion.div>
  );
};

export default LoadingPage;
