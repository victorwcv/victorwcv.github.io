import { Icon } from '@/data/icons';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-bg-hover text-text-secondary">
      <div className="container mx-auto lg:px-16 px-4 py-8 h-full flex lg:flex-row flex-col lg:justify-between justify-center items-center gap-y-10">
        {/* Copyright */}
        <div className="flex lg:flex-row flex-col">
          <span className="mx-3 text-center">
            &copy; {t('footer.copyright', { year })}
          </span>
          <span className="lg:inline-block hidden">|</span>

          <span className="mx-3 text-center">
            {t('footer.developedBy')}
            <strong className="ml-2 italic font-semibold text-text-primary">
              {t('footer.author')}
            </strong>
          </span>
          <span className="lg:inline-block hidden">|</span>

          <span className="mx-3 text-center">
            {t('footer.poweredBy')}
            <strong className="ml-2 italic font-semibold text-text-primary">
              {t('footer.stack')}
            </strong>
          </span>
        </div>

        {/* Socials */}
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/victor-ccanchi/"
            target="_blank"
            rel="noreferrer"
            className="text-2xl"
          >
            <Icon.linkedin />
          </a>
          <a
            href="https://github.com/victorwcv"
            target="_blank"
            rel="noreferrer"
            className="text-2xl"
          >
            <Icon.github />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
