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
      <button
        onClick={() => changeLang('es')}
        className={`rounded-lg px-2 sm:hover:bg-neutral-800 bg-transparent ${lang === 'es' ? 'text-accent-500' : ''} `}
      >
        Español
      </button>
      <span className="mx-2 text-gray-500">|</span>
      <button
        onClick={() => changeLang('en')}
        className={`rounded-lg px-2 sm:hover:bg-neutral-800 bg-transparent ${lang === 'en' ? 'text-accent-500' : ''} `}
      >
        English
      </button>
    </div>
  );
};

export default SelectLanguage;
