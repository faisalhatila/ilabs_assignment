import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './languages/en.json';
import esTranslations from './languages/es.json';

i18n.use(initReactI18next)
    .init({
        resources: {
            en: { translation: enTranslations },
            es: { translation: esTranslations },
        },
        lng: 'en', // Set the initial language
        fallbackLng: 'en', // Use 'en' if the language is not available
        interpolation: {
            escapeValue: false, // Not needed for React as it escapes by default
        },
    });

export default i18n;
