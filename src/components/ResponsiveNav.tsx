import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ToggleButton from './ToggleButton';

const ResponsiveNav = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="sm:hidden block">
      <ToggleButton toggle={toggle} open={open} />
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-white z-40"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <ul className="flex flex-col items-center justify-center h-full text-2xl font-semibold">
              <li className="py-4 w-full active:bg-primary/50">
                <a className="block text-center" href="#home" onClick={toggle}>
                  Home
                </a>
              </li>
              <li className="py-4 w-full active:bg-primary/50">
                <a className="block text-center" href="#about" onClick={toggle}>
                  About
                </a>
              </li>
              <li className="py-4 w-full active:bg-primary/50">
                <a
                  className="block text-center"
                  href="#resume"
                  onClick={toggle}
                >
                  Resume
                </a>
              </li>
              <li className="py-4 w-full active:bg-primary/50">
                <a
                  className="block text-center"
                  href="#portfolio"
                  onClick={toggle}
                >
                  Portfolio
                </a>
              </li>
              <li className="py-4 w-full active:bg-primary/50">
                <a
                  className="block text-center"
                  href="#contact"
                  onClick={toggle}
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ResponsiveNav;
