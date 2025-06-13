import HeroVideo from '@/modules/HeroVideo/HeroVideo';
import s from './videography.module.scss';
import ToggleQuestions from '@/modules/ToggleQuestions/ToggleQuestions';
import FeedbackForm from '@/modules/FeedbackForm/FeedbackForm';
import VideoPortfolio from '@/modules/VideoPortfolio/VideoPortfolio';
import WebWhyChoose from '@/modules/WebWhyChoose/WebWhyChoose';
import VideoEffectiveSolutions from '@/modules/VideoEffectiveSolutions/VideoEffectiveSolutions';
import VideoStepsToLaunch from '@/modules/VideoStepsToLaunch/VideoStepsToLaunch';

export default async function Videography({ params: rawParams }) {
  const params = await rawParams;
  const availableLocales = ['en', 'ua', 'de'];
  const locale = availableLocales.includes(params?.locale)
    ? params.locale
    : 'en';

  return (
    <main>
      <div className={s.container}>
        <HeroVideo locale={locale} />
        <VideoEffectiveSolutions locale={locale} />
        <VideoStepsToLaunch locale={locale} />
        <VideoPortfolio />
        <WebWhyChoose locale={locale} namespace="videoWhyChoose" />
        <ToggleQuestions locale={locale} namespace="videoFaq" />
        <FeedbackForm locale={locale} />
      </div>
    </main>
  );
}
