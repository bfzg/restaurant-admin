import i18n from 'i18next';
import {initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import zh_CN from '../../public/locales/zn/translation.json'
import en_US from '../../public/locales/en/translation.json'

i18n.use(Backend).use(LanguageDetector).use(initReactI18next)
.init({
    resources:{
        en:{translation:en_US},
        zh_CN:{translation:zh_CN}
    },
    fallbackLng: 'zh_CN',
    debug:true,
    interpolation: {
        escapeValue: false,
    },
})

export default i18n;