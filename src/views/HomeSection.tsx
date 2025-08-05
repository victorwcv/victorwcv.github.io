import { FC, useRef } from 'react';
import BlinkingCursor from '../components/BlinkingCursor';
import { Icon } from '../icons/icons';
import { useInView } from 'motion/react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const HomeSection: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: '-50%' });
  const { t } = useTranslation();

  return (
    <section
      className="relative sm:h-screen h-svh min-w-80 min-h-[500px] static-bg"
      id="home"
      ref={ref}
      
    >
      {/* Scroll to top */}
      <motion.div
        className="fixed bottom-0 right-0 cursor-pointer flex items-center justify-center lg:w-14 w-8 lg:h-16 h-10 bg-primary text-white z-30"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <Icon.arrowUp className="lg:text-2xl text-lg" />
      </motion.div>

      {/* Background */}
      <div className="bg-zinc-900/90 absolute inset-0 w-full h-full"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center">

        {/* Hero */}
        <div>
          <h2 className="text-primary font-bold lg:text-2xl uppercase text-sm m-2">
            {t('home.subtitle')} <BlinkingCursor />
          </h2>
          <h1 className="lg:text-8xl text-4xl font-bold text-center text-white">
            {t('home.title')}
          </h1>
          <h3 className="lg:text-xl text-sm text-center text-gray-100 m-2">
            {t('home.description')}
          </h3>
          <div>
            <a
              href="#about"
              className="block w-fit border-gray-500 border-[3px] lg:px-16 px-8 lg:py-4 py-2 text-white mt-8 mx-auto hover:border-primary transition-all duration-300"
            >
              <span className="inline-flex items-center gap-2 uppercase font-bold">
                {t('home.button')} <Icon.arrowDown />
              </span>
            </a>
          </div>
        </div>

        {/* Socials */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white lg:text-4xl text-2xl flex gap-8">
          <a
            href="https://www.linkedin.com/in/victor-ccanchi/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-all duration-300"
          >
            <Icon.linkedin />
          </a>
          <a
             href="https://github.com/victorwcv"
             target="_blank"
             rel="noreferrer"
            className="hover:text-primary transition-all duration-300"
          >
            <Icon.github />
          </a>
          <a
             href="mailto:victorwccv@gmail.com"
             target="_blank"
             rel="noreferrer"
            className="hover:text-primary transition-all duration-300"
          >
            <Icon.envelope />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
