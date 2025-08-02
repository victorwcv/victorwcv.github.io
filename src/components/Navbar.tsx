import { useTranslation } from 'react-i18next';
import SelectLanguage from './SelectLanguage';

const Navbar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className="sm:block hidden w-full h-16 z-40 bg-zinc-900 text-white sticky top-0">
      <div className="container mx-auto px-4 h-full sm:flex hidden justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            src="vc-logo.png"
            alt="vc logo"
            className="block w-12 h-12 object-contain brightness-125"
          />
          <SelectLanguage />
        </div>

        <nav className="block">
          <ul className="flex md:gap-12 gap-8 font font-semibold">
            <li className="hover:text-primary">
              <a href="#home">{t('navbar.home')}</a>
            </li>
            <li className="hover:text-primary">
              <a href="#about">{t('navbar.about')}</a>
            </li>
            <li className="hover:text-primary">
              <a href="#resume">{t('navbar.resume')}</a>
            </li>
            {/* <li className="hover:text-primary">
              <a href="#portfolio">Portfolio</a>
            </li> */}
            <li className="hover:text-primary">
              <a href="#contact">{t('navbar.contact')}</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
