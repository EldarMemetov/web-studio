// import { GetReviews } from '@/services/api';

import HeroAbout from '@/modules/HeroAbout/HeroAbout';

export default async function AboutUs({ params: rawParams }) {
  const params = await rawParams;
  const availableLocales = ['en', 'ua', 'de'];
  const locale = availableLocales.includes(params?.locale)
    ? params.locale
    : 'en';
  // const reviews = await GetReviews();
  return (
    <main>
      <div>
        <HeroAbout locale={locale} />
      </div>
    </main>
  );
}
