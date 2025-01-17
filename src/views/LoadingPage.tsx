import { useState, useEffect, FC } from 'react';
import { motion } from 'motion/react';

interface Props {
  onAnimationComplete: (state: boolean) => void;
}

const LoadingPage: FC<Props> = ({ onAnimationComplete }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return prev;
        }

        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 w-screen h-dvh bg-zinc-900 z-50"
      onAnimationComplete={() => onAnimationComplete(false)}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { delay: 2, duration: 0.5 } }}
    >
      <progress
        className="absolute bottom-0 left-0 right-0 progress progress-primary"
        value={percent}
        max="100"
      ></progress>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
        <img
          src="/vc-logo.png"
          alt="VC logo"
          className="w-20 h-auto brightness-125"
        />
      </div>
    </motion.div>
  );
};

export default LoadingPage;
