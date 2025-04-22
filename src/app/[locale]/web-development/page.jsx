import IdeasToReality from '@/modules/IdeasToReality/IdeasToReality';
import s from './webDevelopment.module.scss';
import FeedbackForm from '@/modules/FeedbackForm/FeedbackForm';
export default async function WebDevelopment({ params: rawParams }) {
  const params = await rawParams;
  const availableLocales = ['en', 'ua', 'de'];
  const locale = availableLocales.includes(params?.locale)
    ? params.locale
    : 'en';

  return (
    <main>
      <div className={s.container}>
        <IdeasToReality locale={locale} />
        <FeedbackForm />
      </div>
    </main>
  );
}
