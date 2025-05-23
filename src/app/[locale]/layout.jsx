import '../globals.scss';

import initTranslations from '@/i18n/utils/i18n';
import TranslationsProvider from '@/i18n/utils/TranslationsProvider';
import ErrorBoundaryWithTranslation from '@/shared/components/ErrorBoundary/ErrorBoundaryWithTranslation/ErrorBoundaryWithTranslation';
import Header from '@/modules/Header/Header';
import { NAMESPACES } from '@/shared/constants';
import i18nConfig from '../../../i18nConfig';
import { dir } from 'i18next';
import SvgSpriteLoader from '@/shared/constants/SvgSpriteLoader/SvgSpriteLoader';
import Footer from '@/modules/Footer/Footer';

const metadataDict = {
  ua: {
    title: 'QVRIX — Веб-розробка та Відео-продукція',
    description:
      'Команда Qvrix — ваш партнер у розвитку бізнесу. Ми створюємо сучасні сайти, унікальний дизайн і професійні відео - для розвитку вашого бізнесу.',
  },
  en: {
    title: 'QVRIX — Web Development & Video Production',
    description:
      'Qvrix is your partner in business growth. We create modern websites, unique design, and professional videos to grow your business.',
  },
  de: {
    title: 'QVRIX — Webentwicklung & Videoproduktion',
    description:
      'Qvrix ist Ihr Partner für Unternehmenswachstum. Wir erstellen moderne Websites, einzigartiges Design und professionelle Videos.',
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params);
  const meta = metadataDict[locale] || metadataDict.en;

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://qvrix.com/${locale}`,
      siteName: 'QVRIX',
      locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
    icons: {
      icon: '/favicon.ico',
    },
  };
}

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default async function Layout({ children, params }) {
  const awaitedParams = await Promise.resolve(params);
  const { locale } = awaitedParams;

  const { resources } = await initTranslations(locale, NAMESPACES);

  return (
    <html lang={locale} dir={dir(locale)}>
      <body suppressHydrationWarning={true}>
        <SvgSpriteLoader />
        <TranslationsProvider
          namespaces={NAMESPACES}
          locale={locale}
          resources={resources}
        >
          <ErrorBoundaryWithTranslation>
            <Header />

            <main>{children}</main>
            <Footer />
          </ErrorBoundaryWithTranslation>
        </TranslationsProvider>
      </body>
    </html>
  );
}
