import { FC, useRef } from 'react';
import BlinkingCursor from '../components/BlinkingCursor';
import { Icon } from '../icons/icons';
import { useInView } from 'motion/react';
import { motion } from 'framer-motion';

const HomeSection: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: '-50%' });

  return (
    <section
      className="relative h-[calc(100vh-64px)] min-w-80 min-h-[600px] scroll-mt-16"
      id="home"
      ref={ref}
    >
      <motion.div
        className="fixed bottom-0 right-0 cursor-pointer flex items-center justify-center lg:w-14 w-8 lg:h-16 h-10 bg-primary text-white z-30"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <Icon.arrowUp className="lg:text-2xl text-lg" />
      </motion.div>
      <div className="bg-zinc-950/80 absolute inset-0 w-full h-full"></div>
      <div className="relative h-full flex flex-col justify-center items-center">
        <div>
          <h2 className="text-primary font-bold lg:text-2xl text-sm m-2">
            HELLO, WORLD! <BlinkingCursor />
          </h2>
          <h1 className="lg:text-8xl text-4xl font-bold text-center text-white">
            I'm Victor Ccanchi
          </h1>
          <h3 className="lg:text-xl text-sm text-center text-gray-100 m-2 font-console">
            {'| WEB-APP-DEVELOPER | FRONTEND | BACKEND |'}
          </h3>
          <div>
            <a
              href="#about"
              className="block w-fit border-gray-500 border-[3px] lg:px-16 px-8 lg:py-4 py-2 text-white mt-8 mx-auto hover:border-primary transition-all duration-300"
            >
              <span className="inline-flex items-center gap-2">
                MORE ABOUT ME <Icon.arrowDown />
              </span>
            </a>
          </div>
        </div>
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
