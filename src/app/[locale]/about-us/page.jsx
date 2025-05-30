// import { GetReviews } from '@/services/api';

import BrandTransformation from '@/modules/BrandTransformation/BrandTransformation';
import HeroAbout from '@/modules/HeroAbout/HeroAbout';
import WebWhyChoose from '@/modules/WebWhyChoose/WebWhyChoose';

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
        <BrandTransformation
          locale={locale}
          namespace="aboutBrandTransformation"
        />
        <WebWhyChoose locale={locale} namespace="aboutWhyChoose" />
      </div>
    </main>
  );
}
