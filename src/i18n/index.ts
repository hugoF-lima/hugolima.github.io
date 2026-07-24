import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import ptBR from './locales/pt-BR.json';
import jp from './locales/jp.json';

const resources = {
  en: { translation: en },
  'pt-BR': { translation: ptBR },
  jp: { translation: jp },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('languagePreference') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
