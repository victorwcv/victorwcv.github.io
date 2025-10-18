import { useTranslation } from 'react-i18next';
import SelectLanguage from './SelectLanguage';
import { useEffect } from 'react';
import { navOptions } from '@/data/nav-options';

const Navbar: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        document.querySelector('header')?.classList.add('bg-neutral-900/90');
      } else {
        document.querySelector('header')?.classList.remove('bg-neutral-900/90');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (document.querySelector('header')) {
        document.querySelector('header')?.classList.remove('bg-neutral-900/90');
      }
    };
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
        </div>
        <div className="flex items-center gap-12">
          <nav>
            <ul className="flex md:gap-10 gap-6 font font-semibold">
              {navOptions.map((option) => (
                <li key={option.id} className="hover:text-accent-500">
                  <a href={`#${option.id}`}>{t(`navbar.${option.id}`)}</a>
                </li>
              ))}
            </ul>
          </nav>
          <SelectLanguage />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
