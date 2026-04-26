import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";
import AsyncStorage from "@react-native-async-storage/async-storage";

import en from "./locales/en.json";
import bg from "./locales/bg.json";

const resources = {
  en: { translation: en },
  bg: { translation: bg },
};

const LANGUAGE_KEY = "app_language";

const initI18n = async () => {
  const savedLang = await AsyncStorage.getItem(LANGUAGE_KEY);
  const deviceLang = Localization.getLocales()[0]?.languageCode;
  const supportedLang = ["en", "bg"].includes(deviceLang as string)
    ? deviceLang
    : "en";

  try {
    await i18n.use(initReactI18next).init({
      lng: (savedLang ?? supportedLang) as string,
      fallbackLng: "en",
      resources,
      interpolation: {
        escapeValue: false,
      },
    });
  } catch (error) {
    throw new Error(`Failed to initialize i18n: ${error}`);
  }
};

initI18n();

export const changeLanguage = async (lng: string) => {
  await AsyncStorage.setItem(LANGUAGE_KEY, lng);
  i18n.changeLanguage(lng);
};

export default i18n;
