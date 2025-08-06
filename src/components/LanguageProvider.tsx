import { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { useTranslation } from 'react-i18next';

interface Props {
  children: React.ReactNode;
}

const DEFAULT_LANGUAGE = 'en';

const LanguageProvider: React.FC<Props> = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const lang = searchParams.get('lang');
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const currentLang = lang || DEFAULT_LANGUAGE;
    if (i18n.language === currentLang) return;

    if (!lang) {
      searchParams.set('lang', DEFAULT_LANGUAGE);
      setSearchParams(searchParams, { replace: true });
    } else {
      i18n.changeLanguage(currentLang);
      document.documentElement.lang = currentLang;
      document.title = t('document.title') || 'Mi Pagina Web';
    }
  }, [i18n, lang, searchParams, setSearchParams, t]);

  return children;
};

export default LanguageProvider;
