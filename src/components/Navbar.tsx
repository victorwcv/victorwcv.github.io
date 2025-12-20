import { useTranslation } from 'react-i18next';
import { navOptions } from '@/data/nav-options';
import { useEffect, useState } from 'react';
import SelectLanguage from './SelectLanguage';
import SelectTheme from './SelectTheme';

const Navbar: React.FC = () => {
  const { t } = useTranslation();

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
        threshold: 0.3,
        rootMargin: '-120px 0px 0px 0px',
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 sm:block hidden">
      <div className="min-w-content flex items-center justify-between bg-bg-card/90 backdrop-blur-sm p-4 rounded-xl shadow-md">
        <a href="#home" className="block w-12 h-12 mx-6" aria-hidden>
          <img
            src="vc-logo.png"
            alt="vc logo"
            className="block object-contain brightness-125"
          />
        </a>
        <div className="flex items-center px-6">
          <ul className="flex md:gap-8 gap-4">
            {navOptions.map((option) => (
              <li key={option.id}>
                <a
                  href={`#${option.id}`}
                  className={`flex flex-col items-center font-semibold transition-all will-change-auto   ${
                    activeSection === option.id
                      ? 'text-accent-500 underline underline-offset-4 transform scale-110'
                      : 'text-text-secondary hover:text-text-secondary/60'
                  }`}
                >
                  {/* <option.icon size={22} /> */}
                  <span className="text-center whitespace-nowrap">
                    {t(`navbar.${option.id}`)}{' '}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className='h-10 w-[1px] bg-bg-hover'></div>
        {/* Settings */}
        <div className="px-6">
          <ul className='flex items-center gap-2'>
            <li className="flex items-center gap-2">
              <SelectLanguage orientation="horizontal" />
            </li>
            <li className="flex items-center gap-2">
              <SelectTheme />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
