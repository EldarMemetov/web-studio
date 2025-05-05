import s from './webDevelopment.module.scss';
import FeedbackForm from '@/modules/FeedbackForm/FeedbackForm';
import ToggleQuestions from '@/modules/ToggleQuestions/ToggleQuestions';
export default async function WebDevelopment({ params: rawParams }) {
  const params = await rawParams;
  const availableLocales = ['en', 'ua', 'de'];
  const locale = availableLocales.includes(params?.locale)
    ? params.locale
    : 'en';

  return (
    <main>
      <div className={s.container}>
        <ToggleQuestions locale={locale} namespace="toggleQuestionsWebDev" />
        <FeedbackForm />
      </div>
    </main>
  );
}
