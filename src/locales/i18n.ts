import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import env from '@/constants/env';

import resources, { langs } from './resources';
const isProduction = env.NodeEnv === 'production';

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: ['en'],
  supportedLngs: langs,
  debug: !isProduction,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
