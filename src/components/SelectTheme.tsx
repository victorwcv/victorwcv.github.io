import { Icon } from '@/icons/icons';
import { useEffect, useState } from 'react';

interface Props {
  orientation?: 'horizontal' | 'vertical';
}

const SelectTheme: React.FC<Props> = ({ orientation = 'horizontal' }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const key = JSON.parse(localStorage.getItem('darkMode') || 'false');

    if (key) {
      changeTheme(key);
    } else {
      localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }
    

  }, [darkMode]);

  const changeTheme = (isDark: boolean) => {
    const html = document.documentElement;

    if (isDark) {
      html.classList.add('dark');
      setDarkMode(true);
      localStorage.setItem('darkMode', JSON.stringify(true));
    } else {
      html.classList.remove('dark');
      setDarkMode(false);
      localStorage.setItem('darkMode', JSON.stringify(false));
    }
  };

  return (
    <div
      className={`flex gap-2 ${orientation === 'vertical' ? 'flex-col' : 'flex-row'}`}
    >
      <button
        onClick={() => changeTheme(false)}
        className={`w-8 h-8 rounded ${!darkMode ? 'text-white bg-accent-400 shadow' : 'bg-bg-hover text-text-secondary'} `}
      >
        <Icon.sun size={20} className='m-auto' />
      </button>
      <button
        onClick={() => changeTheme(true)}
        className={`w-8 h-8 rounded ${darkMode ? 'text-white bg-accent-400 shadow' : 'bg-bg-hover text-text-secondary'} `}
      >
        <Icon.moon size={20} className='m-auto'/>
      </button>
    </div>
  );
};

export default SelectTheme;
