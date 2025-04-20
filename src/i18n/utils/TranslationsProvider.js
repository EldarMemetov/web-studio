// 'use client';

// import { createInstance } from 'i18next';
// import { I18nextProvider } from 'react-i18next';
// import initTranslations from './i18n';

// export default function TranslationsProvider({
//   children,
//   locale,
//   namespaces,
//   resources,
// }) {
//   const i18n = createInstance();

//   initTranslations(locale, namespaces, i18n, resources);

//   return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
// }
'use client';

import React, { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import initTranslations from './i18n';

// Гибридная логика: если i18n передали — используем, иначе инициализируем на клиенте
export default function TranslationsProvider({
  children,
  locale,
  namespaces,
  i18n: serverI18n,
  resources,
}) {
  const [i18nInstance, setI18nInstance] = useState(serverI18n || null);

  useEffect(() => {
    if (!serverI18n) {
      initTranslations(locale, namespaces, undefined, resources).then(
        ({ i18n }) => {
          setI18nInstance(i18n);
        }
      );
    }
  }, [locale, serverI18n]);

  if (!i18nInstance) return null;

  return <I18nextProvider i18n={i18nInstance}>{children}</I18nextProvider>;
}
