
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

const supportedLangs = ['en', 'es'];
const defaultLang = 'en';

export const useLanguageFromQuery = () => {
  const { i18n, t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const lang = params.get('lang');

    const isValidLang = lang && supportedLangs.includes(lang);

    if (!isValidLang) {
      
      params.set('lang', defaultLang);
      navigate(
        {
          pathname: location.pathname,
          search: params.toString(),
        },
        { replace: true }
      );
    } else {
      
      if (i18n.language !== lang) {
        i18n.changeLanguage(lang);
      }
     
      document.documentElement.lang = lang!;
      document.title = t('document.title') || 'Mi Pagina Web';
    }
  }, [i18n, location.pathname, location.search, navigate, t]);

};
