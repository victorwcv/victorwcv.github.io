import BlinkingCursor from '../components/BlinkingCursor';
import { Icon } from '../icons/icons';
import { useTranslation } from 'react-i18next';
import SectionLayout from '@/layouts/SectionLayout';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
};

const HomeSection: React.FC<{ isReady: boolean }> = ({ isReady }) => {
  const { t } = useTranslation();

  return (
    <SectionLayout
      className="relative bg-[url('/bg.webp')] bg-cover bg-center bg-no-repeat"
      id="home"
    >
      <div className="absolute inset-0 bg-bg-primary/70 backdrop-blur-md"></div>
      <div className="h-full min-h-fit w-full flex flex-col bg-bg-card/90 backdrop-blur-lg rounded-2xl shadow-2xl md:mt-12 mt-0 overflow-hidden">
        {/* Logo optimizado con will-change y transform 3D */}
        <motion.img
          src="/react-logo.svg"
          alt="logo"
          className="absolute top-0 left-0 
             -translate-x-1/3 -translate-y-1/3
             scale-150 opacity-5 pointer-events-none select-none"
          style={{ 
            willChange: 'transform',
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden'
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <div className="relative flex-1 flex md:flex-row flex-col md:gap-0 gap-8 md:px-32 px-0 py-12 items-center md:justify-center justify-evenly">
          {/* Hero Text */}
          <motion.div
            className="z-10"
            initial={'hidden'}
            animate={isReady ? 'show' : 'hidden'}
            transition={{ staggerChildren: 0.15 }}
          >
            <motion.div className="md:text-left text-center px-4">
              <motion.h2
                variants={fadeUp}
                className="text-accent-500 font-bold lg:text-2xl uppercase text-lg mb-1"
              >
                {t('home.subtitle')} <BlinkingCursor />
              </motion.h2>

              <motion.h1
                variants={fadeUp}
                className="lg:text-8xl text-5xl font-bold"
              >
                {t('home.title')}
              </motion.h1>

              <motion.h3
                variants={fadeUp}
                className="text-text-secondary font-semibold lg:text-xl text-base mt-2"
              >
                {t('home.description')}
              </motion.h3>

              <motion.h3
                variants={fadeUp}
                className="text-text-secondary lg:text-base text-sm mt-1"
              >
                {t('home.description2')}
              </motion.h3>

              <motion.a
                variants={fadeUp}
                href="#projects"
                className="inline-block mt-4 py-3 px-6 bg-accent-500 hover:bg-accent-600 text-accent-50 rounded shadow-lg transition-colors duration-300"
              >
                <span className="inline-flex items-center gap-2">
                  {t('home.button')}
                  <Icon.arrowRight size={22} />
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            className="md:w-3/5 w-4/5"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img src="/ilustration.svg" alt="Ilustration developer" />
          </motion.div>
        </div>

        {/* Socials (fade simple) */}
        <motion.div
          className=" lg:text-4xl text-2xl flex justify-end sm:pb-10 pb-5 sm:px-12 px-6 gap-8 text-text-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: isReady ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <a
            title='Linkedin'
            href="https://www.linkedin.com/in/victor-ccanchi/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent-500 transition-all duration-300"
          >
            <Icon.linkedin />
          </a>
          <a
            title='Github'
            href="https://github.com/victorwcv"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent-500 transition-all duration-300"
          >
            <Icon.github />
          </a>
          <a
            title='Mail'
            href="mailto:victorwccv@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent-500 transition-all duration-300"
          >
            <Icon.envelope />
          </a>
        </motion.div>
      </div>
    </SectionLayout>
  );
};

export default HomeSection;