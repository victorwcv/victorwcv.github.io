import { Icon } from '@/icons/icons';
import { useSearchParams } from 'react-router';

const SelectLanguage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const lang = searchParams.get('lang') || 'en';

  const changeLang = (newLang: string) => {
    if (newLang === lang) return;
    searchParams.set('lang', newLang);
    setSearchParams(searchParams, { replace: true });
  };

  return (
    <div className="flex items-center justify-center">
      <span className="mr-1 text-gray-500"><Icon.translate size={22} /></span>
      
      <button
        onClick={() => changeLang('es')}
        className={`rounded-lg px-2 sm:hover:bg-neutral-800 bg-transparent cursor-pointer ${lang === 'es' ? 'text-accent-500 font-bold' : ''} `}
      >
        ES
      </button>
      <span className="mx-1 text-gray-500">|</span>
      <button
        onClick={() => changeLang('en')}
        className={`rounded-lg px-2 sm:hover:bg-neutral-800 bg-transparent cursor-pointer ${lang === 'en' ? 'text-accent-500 font-bold' : ''} `}
      >
        EN
      </button>
    </div>
  );
};

export default SelectLanguage;
