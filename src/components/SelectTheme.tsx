import { Icon } from '@/data/icons';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('darkMode');

    const initialDark =
      stored !== null
        ? JSON.parse(stored)
        : window.matchMedia('(prefers-color-scheme: dark)').matches;

    setIsDark(initialDark);
    document.documentElement.classList.toggle('dark', initialDark);
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;

      document.documentElement.classList.toggle('dark', next);
      localStorage.setItem('darkMode', JSON.stringify(next));

      return next;
    });
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`w-8 h-8 transition text-text-secondary`}
    >
      {isDark ? (
        <Icon.moon size={18} className="m-auto" />
      ) : (
        <Icon.sun size={18} className="m-auto text-yellow-500" />
      )}
    </button>
  );
};

export default ThemeToggle;
