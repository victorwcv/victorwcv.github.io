import { useSearchParams } from 'react-router';

interface Props {
  orientation?: 'horizontal' | 'vertical';
}

const SelectLanguage: React.FC<Props> = ({ orientation = 'horizontal' }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const lang = searchParams.get('lang') || 'en';

  const changeLang = (newLang: string) => {
    if (newLang === lang) return;
    searchParams.set('lang', newLang);
    setSearchParams(searchParams, { replace: true });
  };

  return (
    <div
      className={`flex gap-2 ${orientation === 'vertical' ? 'flex-col' : 'flex-row'}`}
    >
      <button
        onClick={() => changeLang('en')}
        className={`w-8 h-8 rounded ${lang === 'en' ? 'text-white bg-accent-400 shadow' : 'bg-bg-hover text-text-secondary'} `}
      >
        En
      </button>
      <button
        onClick={() => changeLang('es')}
        className={`w-8 h-8 rounded ${lang === 'es' ? 'text-white bg-accent-400 shadow' : 'bg-bg-hover text-text-secondary'} `}
      >
        Es
      </button>
    </div>
  );
};

export default SelectLanguage;
