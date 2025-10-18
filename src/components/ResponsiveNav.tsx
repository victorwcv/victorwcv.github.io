import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ToggleButton from './ToggleButton';
import { useTranslation } from 'react-i18next';
import SelectLanguage from './SelectLanguage';

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
            className="fixed top-0 left-0 w-screen h-screen bg-white z-40"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <ul className="flex flex-col items-center justify-center h-full text-xl font-semibold">
              <li className="py-4 w-full active:bg-accent-500/50">
                <a className="block text-center" href="#home" onClick={toggle}>
                  {t('navbar.home')}
                </a>
              </li>
              <li className="py-4 w-full active:bg-accent-500/50">
                <a className="block text-center" href="#about" onClick={toggle}>
                  {t('navbar.about')}
                </a>
              </li>
              <li className="py-4 w-full active:bg-accent-500/50">
                <a
                  className="block text-center"
                  href="#resume"
                  onClick={toggle}
                >
                  {t('navbar.resume')}
                </a>
              </li>
              {/* <li className="py-4 w-full active:bg-accent-500/50">
                <a
                  className="block text-center"
                  href="#portfolio"
                  onClick={toggle}
                >
                  Portfolio
                </a>
              </li> */}
              <li className="py-4 w-full active:bg-accent-500/50">
                <a
                  className="block text-center"
                  href="#contact"
                  onClick={toggle}
                >
                  {t('navbar.contact')}
                </a>
              </li>
              <li className="py-4 w-full">
                <SelectLanguage />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ResponsiveNav;
