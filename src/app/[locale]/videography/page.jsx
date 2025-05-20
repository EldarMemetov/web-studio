import HeroVideo from '@/modules/HeroVideo/HeroVideo';
import s from './videography.module.scss';
import ToggleQuestions from '@/modules/ToggleQuestions/ToggleQuestions';
import FeedbackForm from '@/modules/FeedbackForm/FeedbackForm';
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
        <ToggleQuestions locale={locale} />
        <FeedbackForm locale={locale} />
      </div>
    </main>
  );
}
