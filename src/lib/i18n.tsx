import i18next from "i18next";
import {initReactI18next} from "react-i18next";

import uk from '../translations/uk.json'
import bg from '../translations/bg.json'
import ru from '../translations/ru.json'
import en from '../translations/en.json'
import de from '../translations/de.json'

const resources = {
    uk: {
        translation: uk
    },
    bg: {
        translation: bg
    },
    ru: {
        translation: ru
    },
    en: {
        translation: en
    },
    de: {
        translation: de
    },
}

i18next.use(initReactI18next).init({
    resources,
    lng: localStorage.getItem('lng') || "en"
})

export default i18next;