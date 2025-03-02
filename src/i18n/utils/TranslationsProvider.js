"use client";

import { useState, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import { initTranslations } from "./i18n";

export default function TranslationsProvider({ children, locale }) {
  const [i18n, setI18n] = useState(null);

  useEffect(() => {
    async function loadTranslations() {
      try {
        const i18nInstance = await initTranslations(locale);
        setI18n(i18nInstance);
      } catch (error) {
        console.error("Failed to load translations:", error);
      }
    }

    loadTranslations();
  }, [locale]);

  if (!i18n) return null;

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
