import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import moment from 'moment';
import { CZECH } from './cs/translations';
import { ENGLISH } from './en/translations';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: ENGLISH,
      },
      cs: {
        translation: CZECH,
      },
    },
    interpolation: {
      format: function (value, format) {
        if (value instanceof Date) return moment(value).format(format);
        return value;
      },
    },
  });

i18n.changeLanguage('en');
