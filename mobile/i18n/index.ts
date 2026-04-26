import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";
import AsyncStorage from "@react-native-async-storage/async-storage";

import en from "./locales/en.json";
import bg from "./locales/bg.json";

const LANGUAGE_KEY = "app_language";

const resources = {
  en: {
    translation: en,
  },
  bg: {
    translation: bg,
  },
};
const getInitialLanguage = async () => {
  const savedLang = await AsyncStorage.getItem(LANGUAGE_KEY);
  const deviceLang = Localization.getLocales()?.[0]?.languageCode ?? "en";
  const supportedLang = ["en", "bg"].includes(deviceLang) ? deviceLang : "en";

  return savedLang || supportedLang;
};

const initI18n = async () => {
  const lng = await getInitialLanguage();

  await i18n.use(initReactI18next).init({
    lng,
    fallbackLng: "en",
    resources,
    interpolation: {
      escapeValue: false,
    },
    compatibilityJSON: "v4",
  });
};

initI18n().catch((err) => {
  console.error("Failed to initialize i18n", err);
});

export const changeLanguage = async (lng: string) => {
  await AsyncStorage.setItem(LANGUAGE_KEY, lng);
  await i18n.changeLanguage(lng);
};

export default i18n;
