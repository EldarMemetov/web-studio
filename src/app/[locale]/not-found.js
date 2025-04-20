// import NotFoundPage from '@/modules/NotFoundPage/NotFoundPage';

// export default function NotFound() {
//   return (
//     <div>
//       <NotFoundPage />
//     </div>
//   );
// }
'use client';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

import s from './notFoundPage.module.scss';

export default function NotFoundPage() {
  const { t } = useTranslation('errorBoundary');

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
