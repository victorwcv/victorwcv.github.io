import { useTranslation } from 'react-i18next';
import { navOptions } from '@/data/nav-options';
import { useEffect, useState } from 'react';

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
        threshold: 0.30,
        rootMargin: '-120px 0px 0px 0px',
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 sm:block hidden">
      <div className="min-w-content flex items-center justify-between bg-bg-card/80 backdrop-blur p-4 px-8 rounded-xl shadow-lg">
        <picture className="w-12 h-12 mr-18">
          <img
            src="vc-logo.png"
            alt="vc logo"
            className="block object-contain brightness-125"
          />
        </picture>
        <div className="flex items-center gap-12">
          <ul className="flex md:gap-12 gap-6">
            {navOptions.map((option) => (
              <li
                key={option.id}
              >
                <a
                  href={`#${option.id}`}
                  className={`flex flex-col items-center transition-all duration-300 will-change-auto ${
                    activeSection === option.id
                      ? 'text-accent-500 transform scale-110 font-semibold'
                      : 'text-text-secondary hover:text-text-secondary/80'
                  }`}
                >
                  <option.icon size={22} />
                  <span className='text-center whitespace-nowrap'>{t(`navbar.${option.id}`)} </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
