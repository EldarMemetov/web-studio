import BrandTransformation from '@/modules/BrandTransformation/BrandTransformation';
import HeroAbout from '@/modules/HeroAbout/HeroAbout';
import WebWhyChoose from '@/modules/WebWhyChoose/WebWhyChoose';
import s from './about-us.module.scss';
import AboutFactsSection from '@/modules/AboutFactsSection/AboutFactsSection';
export default async function AboutUs({ params: rawParams }) {
  const params = await rawParams;
  const availableLocales = ['en', 'ua', 'de'];
  const locale = availableLocales.includes(params?.locale)
    ? params.locale
    : 'en';

  return (
    <main>
      <div className={s.container}>
        <HeroAbout locale={locale} />
        <AboutFactsSection locale={locale} />
        <BrandTransformation
          locale={locale}
          namespace="aboutBrandTransformation"
        />
        <WebWhyChoose locale={locale} namespace="aboutWhyChoose" />
      </div>
    </main>
  );
}
