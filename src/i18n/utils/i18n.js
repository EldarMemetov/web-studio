import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { NAMESPACES } from "../../shared/constants";

const loadTranslationFile = async (locale, namespace) => {
  try {
    const url = `/locales/${locale}/${namespace}.json`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(
        `Failed to load translation for ${namespace} in ${locale}`,
      );
    }
    return await res.json();
  } catch (error) {
    console.error(error);
    return {};
  }
};

export async function initTranslations(locale = "ua", namespaces = NAMESPACES) {
  if (!i18next.isInitialized) {
    const resources = {};

    for (const namespace of namespaces) {
      const translation = await loadTranslationFile(locale, namespace);
      resources[locale] = {
        ...resources[locale],
        [namespace]: translation,
      };
    }

    await i18next.use(initReactI18next).init({
      resources,
      lng: locale,
      fallbackLng: "ua",
      interpolation: { escapeValue: false },
    });
  } else {
    for (const namespace of namespaces) {
      if (!i18next.hasResourceBundle(locale, namespace)) {
        const translation = await loadTranslationFile(locale, namespace);
        i18next.addResourceBundle(locale, namespace, translation, true, true);
      }
    }
    await i18next.changeLanguage(locale);
  }

  return i18next;
}
