import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import frTranslation from './fr.json';
import enTranslation from './en.json';

// the translations
const resources = {
    fr: {
        translation: frTranslation
    },
    en: {
        translation: enTranslation
    }
};

i18n.use(detector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        keySeparator: '.', // we do not use keys in form messages.welcome
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });
