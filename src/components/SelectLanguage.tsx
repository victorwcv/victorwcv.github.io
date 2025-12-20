import { useSearchParams } from 'react-router';

interface Props {
  orientation?: 'horizontal' | 'vertical';
}

const SelectLanguage: React.FC<Props> = ({ orientation = 'horizontal' }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const lang = searchParams.get('lang') ?? 'en';

  const changeLang = (newLang: 'en' | 'es') => {
    if (newLang === lang) return;

    const nextParams = new URLSearchParams(searchParams);
    nextParams.set('lang', newLang);

    setSearchParams(nextParams, { replace: true });
  };

  return (
    <div
      role="group"
      aria-label="Language selector"
      className={`flex items-center ${orientation === 'vertical' ? 'flex-col' : 'flex-row'}`}
    >
      <button
        aria-pressed={lang === 'en'}
        onClick={() => changeLang('en')}
        className={`w-8 h-8 ${
          lang === 'en'
            ? 'text-accent-500 font-semibold'
            : 'text-text-secondary'
        }`}
      >
        EN
      </button>
      <div className="w-[1px] h-4 bg-bg-hover"></div>
      <button
        aria-pressed={lang === 'es'}
        onClick={() => changeLang('es')}
        className={`w-8 h-8 ${
          lang === 'es'
            ? 'text-accent-500 font-semibold'
            : 'text-text-secondary'
        }`}
      >
        ES
      </button>
    </div>
  );
};

export default SelectLanguage;
