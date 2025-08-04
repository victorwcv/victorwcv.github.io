import { useTranslation } from 'react-i18next';
import SelectLanguage from './SelectLanguage';
import { useEffect } from 'react';

const Navbar: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    //Change background color on scroll, only on desktop when is 500px from top
    const handleScroll = () => {
      if (window.scrollY > 500) {
        document.querySelector('header')?.classList.add('bg-zinc-900/90');
      } else {
        document.querySelector('header')?.classList.remove('bg-zinc-900/90');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (document.querySelector('header')) {
        document.querySelector('header')?.classList.remove('bg-zinc-900/90'); 
      }
    }
  }, []);

  return (
    <header className="sm:block hidden w-full h-16 z-40 text-white fixed top-0  transition-colors duration-500">
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
