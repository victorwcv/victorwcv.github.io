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

    const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '-120px 0px 0px 0px',
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

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
            className="fixed top-0 left-0 w-screen h-dvh bg-bg-card text-text-secondary z-40 shadow-lg"
            style={{ 
              willChange: 'transform',
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden'
            }}
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ 
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1]
            }}
          >
            <ul className="flex flex-col items-center justify-center h-full text-xl font-semibold">
              {navOptions.map((option, index) => (
                <motion.li
                  key={option.id}
                  className="w-full"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.2, 
                    delay: 0.2 + index * 0.05
                  }}
                >
                  <a
                    className={`block text-center py-4 w-full rounded ${activeSection === option.id ? 'text-accent-50 bg-accent-500 shadow-lg' : ''}`}
                    href={`#${option.id}`}
                    onClick={toggle}
                  >
                    <option.icon className="inline-block mr-2" />
                    <span>{t(`navbar.${option.id}`)}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.div 
              className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <SelectLanguage />
              <SelectTheme />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ResponsiveNav;