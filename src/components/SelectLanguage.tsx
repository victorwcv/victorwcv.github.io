import { useNavigate, useLocation } from 'react-router';

const SelectLanguage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

    const params = new URLSearchParams(location.search);
    const lang = params.get('lang');
 

  const changeLang = (lang: string) => {
    const params = new URLSearchParams(location.search);
    params.set('lang', lang);
    navigate({ search: params.toString() });
  };
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={() => changeLang('es')}
        className={`rounded-lg px-2 sm:hover:bg-zinc-800 bg-transparent ${lang === 'es' ? 'text-accent-500' : ''} `}
      >
        Español
      </button>
      <span className="mx-2 text-gray-500">|</span>
      <button
        onClick={() => changeLang('en')}
        className={`rounded-lg px-2 sm:hover:bg-zinc-800 bg-transparent ${lang === 'en' ? 'text-accent-500' : ''} `}
      >
        English
      </button>
    </div>
  );
};

export default SelectLanguage;
