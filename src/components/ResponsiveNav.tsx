import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ToggleButton from './ToggleButton';
import { useTranslation } from 'react-i18next';
import SelectLanguage from './SelectLanguage';
import { navOptions } from '@/data/nav-options';
import SelectTheme from './SelectTheme';

const ResponsiveNav = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const toggle = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [open]);

  return (
    <div className="sm:hidden block">
      <ToggleButton toggle={toggle} open={open} />
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed top-0 left-0 w-screen h-dvh bg-bg-card text-text-secondary z-40"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <ul className="flex flex-col items-center justify-center h-full text-xl font-semibold">
              {navOptions.map((option) => (
                <li
                  key={option.id}
                  className="py-4 w-full active:bg-accent-500/50"
                >
                  <a
                    className="block text-center"
                    href={`#${option.id}`}
                    onClick={toggle}
                  >
                    {t(`navbar.${option.id}`)}
                  </a>
                </li>
              ))}
            </ul>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-8">
              <SelectLanguage />
              <SelectTheme />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ResponsiveNav;
