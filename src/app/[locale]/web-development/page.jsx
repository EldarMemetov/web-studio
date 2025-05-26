import dynamic from 'next/dynamic';
import EffectiveSolutions from '@/modules/EffectiveSolutions/EffectiveSolutions';
import s from './webDevelopment.module.scss';
import FeedbackForm from '@/modules/FeedbackForm/FeedbackForm';
import StepsToLaunch from '@/modules/StepsToLaunch/StepsToLaunch';
import ToggleQuestions from '@/modules/ToggleQuestions/ToggleQuestions';
import WebHero from '@/modules/WebHero/WebHero';
import WebWhyChoose from '@/modules/WebWhyChoose/WebWhyChoose';
import WebPortfolio from '@/modules/WebPortfolio/WebPortfolio';
import OrDevelopment from '@/modules/OrDevelopment/OrDevelopment';

export default async function WebDevelopment({ params: rawParams }) {
  const params = await rawParams;
  const availableLocales = ['en', 'ua', 'de'];
  const locale = availableLocales.includes(params?.locale)
    ? params.locale
    : 'en';

  return (
    <main>
      <div className={s.container}>
        <WebHero locale={locale} />
        <StepsToLaunch locale={locale} />
        <EffectiveSolutions locale={locale} />
        <WebWhyChoose locale={locale} />
        <WebPortfolio locale={locale} />
        <OrDevelopment locale={locale} />
        <ToggleQuestions locale={locale} namespace="toggleQuestionsWebDev" />
        <FeedbackForm />
      </div>
    </main>
  );
}
