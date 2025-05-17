import PortfolioId from '@/modules/PortfolioId/PortfolioId';
import { initServerI18n } from '@/i18n/utils/serverI18n';

export async function generateMetadata({ params }) {
  const locale = ['en', 'ua', 'de'].includes(params.locale)
    ? params.locale
    : 'en';

  const { t } = await import('@/i18n/utils/serverI18n').then((m) =>
    m.initServerI18n(locale, ['webPortfolio'])
  );

  const project = t('projects', { returnObjects: true })[params.id];
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
  };
}

export async function generateStaticParams() {
  const locales = ['en', 'ua', 'de'];
  const paths = await Promise.all(
    locales.map(async (locale) => {
      const { t } = await initServerI18n(locale, ['webPortfolio']);
      const projects = t('projects', { returnObjects: true });

      return Object.keys(projects).map((id) => ({ locale, id }));
    })
  );
  return paths.flat();
}

export default async function PortfolioItemPage({ params: rawParams }) {
  const params = await rawParams;
  console.log('Params in BlogIdPage:', params);

  const availableLocales = ['en', 'ua', 'de'];
  const locale = availableLocales.includes(params?.locale)
    ? params.locale
    : 'en';
  const id = params?.id;
  return <PortfolioId locale={locale} id={id} />;
}
