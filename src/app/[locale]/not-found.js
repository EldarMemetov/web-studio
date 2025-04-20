// import NotFoundPage from '@/modules/NotFoundPage/NotFoundPage';

// export default function NotFound() {
//   return (
//     <div>
//       <NotFoundPage />
//     </div>
//   );
// }

import { initServerI18n } from '@/i18n/utils/serverI18n';
import Link from 'next/link';

import s from './notFoundPage.module.scss';

export default async function NotFoundPage({ locale }) {
  const { t } = await initServerI18n(locale, ['errorBoundary']);

  return (
    <section className={s.section}>
      <div className={s.container}>
        <h2 className={s.title}>{t('notFoundTitle')}</h2>
        <p className={s.message}>{t('notFoundMessage')}</p>
        <Link href="/" className={s.link}>
          {t('backToHome')}
        </Link>
      </div>
    </section>
  );
}
