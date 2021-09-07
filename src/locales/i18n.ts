import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import homeEn from './en/home.json';
import homeVi from './vi/home.json';

export const translationsJson = {
  en: {
    home: homeEn,
  },
  vi: {
    home: homeVi,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: translationsJson,
    defaultNS: 'en',
    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
