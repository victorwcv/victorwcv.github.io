import { Icon } from '@/icons/icons';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-zinc-900 text-zinc-500">
      <div className="container mx-auto lg:px-16 px-4 py-8 h-full flex lg:flex-row flex-col lg:justify-between justify-center items-center gap-y-10">
        {/* Copyright */}
        <div className="flex lg:flex-row flex-col">
          <span className="mx-3  text-center ">&copy; Copyright {year}</span>
          <span className="lg:inline-block hidden">|</span>

          <span className="mx-3  text-center">
            Developed by
            <strong className="ml-2 italic font-semibold text-white">
              Victor Ccanchi
            </strong>
          </span>
          <span className="lg:inline-block hidden">|</span>
          <span className="mx-3  text-center">
            Powered by
            <strong className="ml-2 italic font-semibold text-white">
              React + TypeScript
            </strong>
          </span>
        </div>

        {/* Socials */}
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/victor-ccanchi/"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 text-2xl"
          >
            <Icon.linkedin />
          </a>
          <a
            href="https://github.com/victorwcv"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 text-2xl"
          >
            <Icon.github />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
