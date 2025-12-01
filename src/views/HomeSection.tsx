import { useRef } from 'react';
import BlinkingCursor from '../components/BlinkingCursor';
import { Icon } from '../icons/icons';
import { useInView } from 'motion/react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SectionLayout from '@/layouts/SectionLayout';

const HomeSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: '-50%' });
  const { t } = useTranslation();

  return (
    <SectionLayout
      className="relative sm:h-screen h-svh min-w-80 min-h-[500px] bg-[url('/bg.webp')] bg-cover bg-center bg-no-repeat"
      id="home"
    >
      <div className="absolute inset-0 bg-bg-primary/50"></div>
      <div
        ref={ref}
        className="h-full w-full bg-bg-card/90 backdrop-blur-lg rounded-2xl shadow-2xl mt-12"
      >
        {/* Content */}
        <div className="relative h-full flex md:flex-row flex-col md:gap-0 gap-8 md:px-32 px-0 items-center justify-center">
          {/* Hero */}
          <div className="z-10">
            <div className="md:text-left text-center">
              <h2 className="text-accent-500 font-bold lg:text-2xl uppercase text-lg mb-1">
                {t('home.subtitle')} <BlinkingCursor />
              </h2>
              <h1 className="lg:text-8xl text-5xl font-bold">
                {t('home.title')}
              </h1>
              <h3 className="text-text-secondary lg:text-xl text-base mt-1">
                {t('home.description')}
              </h3>

              <a
                href="#about"
                className="inline-block mt-4 py-3 px-6 bg-accent-500 hover:bg-accent-600 text-accent-50 rounded shadow transition-all duration-300"
              >
                <span className="inline-flex items-center gap-2 uppercase font-bold">
                  {t('home.button')}
                </span>
              </a>
            </div>
          </div>

          <div className="md:w-3/5 w-4/5 opacity-80">
            <img src="/ilustration.svg" alt="Ilustration developer" />
          </div>

          {/* <div className="absolute -bottom-8 w-full h-4 bg-gradient-to-r from-accent-400 to-transparent  rounded-full"></div> */}
        </div>
        {/* Socials */}
        <div className="absolute bottom-8 right-8 lg:text-4xl text-2xl flex gap-8 text-text-secondary">
          <a
            href="https://www.linkedin.com/in/victor-ccanchi/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent-500 transition-all duration-300"
          >
            <Icon.linkedin />
          </a>
          <a
            href="https://github.com/victorwcv"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent-500 transition-all duration-300"
          >
            <Icon.github />
          </a>
          <a
            href="mailto:victorwccv@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent-500 transition-all duration-300"
          >
            <Icon.envelope />
          </a>
        </div>
      </div>
      {/* Scroll to top */}
      <motion.div
        className="fixed bottom-2 right-2 cursor-pointer flex items-center justify-center lg:w-14 w-8 lg:h-16 shadow h-10 bg-accent-500 text-text-primary z-30 rounded "
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <Icon.arrowUp className="lg:text-2xl text-lg text-white" />
      </motion.div>
    </SectionLayout>
  );
};

export default HomeSection;
