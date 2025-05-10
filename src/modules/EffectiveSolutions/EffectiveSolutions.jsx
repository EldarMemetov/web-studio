// import Container from '@/shared/container/Container';
// import Image from 'next/image';
// import s from './EffectiveSolutions.module.scss';
// import { initServerI18n } from '@/i18n/utils/serverI18n';
// export default async function EffectiveSolutions({ locale }) {
//   const { t } = await initServerI18n(locale, ['effectiveSolutions']);
//   return (
//     <section>
//       <Container>
//         <div className={s.containerContent}>
//           <h2 className={s.title}>
//             <span className={s.spanTitle}>Рішення </span> , які ми пропонуємо
//           </h2>
//           <p className={s.description}>
//             QVRIX пропонує повний спектр рішень — від концепції до запуску. Ми
//             адаптуємось під ваш бізнес, щоб створити
//             <span className={s.SpanDescription}>
//               ефективні, красиві й функціональні сайти,
//             </span>{' '}
//             які дійсно працюють.{' '}
//           </p>
//           <ul className={s.ListContent}>
//             <li className={s.listContent}>
//               <h2 className={s.titleInfo}>UI/UX-дизайн</h2>
//               <p className={s.info}>Ми проєктуємо, створюємо і враховуємо.</p>
//               <Image
//                 src="/image/effective/ui-mobile.png"
//                 alt="ui/ux-design"
//                 width={157}
//                 height={82}
//               />
//             </li>
//             <li className={s.listContent}>
//               <h2 className={s.titleInfo}>Лендинги</h2>
//               <p className={s.info}>Продають із першого погляду</p>
//               <Image
//                 src="/image/effective/landing-mobile-figma.png"
//                 alt="landing-pages"
//                 width={72}
//                 height={72}
//               />
//               <Image
//                 src="/image/effective/landing-mobile-ai.png"
//                 alt="landing-pages"
//                 width={56}
//                 height={56}
//               />
//               <Image
//                 src="/image/effective/landing-mobile-ps.png"
//                 alt="landing-pages"
//                 width={56}
//                 height={56}
//               />
//             </li>
//             <li className={s.listContent}>
//               <h2 className={s.titleInfo}>SEO-просування</h2>
//               <p className={s.info}>Ваш сайт — у топі пошуковиків.</p>
//               <Image
//                 src="/image/effective/seo-mobile.png"
//                 alt="seo-promotion"
//                 width={252}
//                 height={170}
//               />
//               <Image
//                 src="/image/effective/seo-mobile-keyword.png"
//                 alt="seo-promotion"
//                 width={280}
//                 height={40}
//               />
//             </li>
//             <li className={s.listContent}>
//               <h2 className={s.titleInfo}>Редизайн сайтів</h2>
//               <p className={s.info}>Оновлюємо, щоб сайт приносив результат</p>
//               <Image
//                 src="/image/effective/redesign-mobile.png"
//                 alt="website-redesign"
//                 width={64}
//                 height={64}
//               />
//               <Image
//                 src="/image/effective/redesign-mobile.png"
//                 alt="website-redesign"
//                 width={40}
//                 height={40}
//               />
//               <Image
//                 src="/image/effective/redesign-mobile.png"
//                 alt="website-redesign"
//                 width={40}
//                 height={40}
//               />
//               <Image
//                 src="/image/effective/redesign-mobile.png"
//                 alt="website-redesign"
//                 width={40}
//                 height={40}
//               />
//               <Image
//                 src="/image/effective/redesign-mobile.png"
//                 alt="website-redesign"
//                 width={40}
//                 height={40}
//               />
//             </li>
//             <li className={s.listContent}>
//               <h2 className={s.titleInfo}>Інтернет-магазини</h2>
//               <p className={s.info}>
//                 Ми створюємо сайти, які приносять продажі.
//               </p>
//               <Image
//                 src="/image/effective/Internet-mobile.png"
//                 alt="online-stores"
//                 width={166}
//                 height={102}
//               />
//               <Image
//                 src="/image/effective/Internet-mobile-crm.png"
//                 alt="online-stores"
//                 width={47}
//                 height={36}
//               />
//               <Image
//                 src="/image/effective/Internet-mobile-one.png"
//                 alt="online-stores"
//                 width={49}
//                 height={49}
//               />
//             </li>
//             <li className={s.listContent}>
//               <h2 className={s.titleInfo}>Корпоративні сайти</h2>
//               <p className={s.info}>
//                 Розробляємо сайти для малого та великого бізнесу.
//               </p>
//               <Image
//                 src="/image/effective/corporate-mobile.png"
//                 alt="corporate-websites"
//                 width={167}
//                 height={167}
//               />
//               <Image
//                 src="/image/effective/corporate-mobile-schedule.png"
//                 alt="corporate-websites"
//                 width={177}
//                 height={117}
//               />
//             </li>
//             <li className={s.listContent}>
//               <h2 className={s.titleInfo}>Персональні блоги</h2>
//               <p className={s.info}>
//                 Ми створюємо платформи, які підкреслюють вашу унікальність.
//               </p>
//               <Image
//                 src="/image/effective/blog-mobile.png"
//                 alt="personal-blogs"
//                 width={81}
//                 height={109}
//               />
//               <Image
//                 src="/image/effective/blog-mobile-two.png"
//                 alt="personal-blogs"
//                 width={54}
//                 height={54}
//               />
//               <Image
//                 src="/image/effective/blog-mobile-one.png"
//                 alt="personal-blogs"
//                 width={60}
//                 height={60}
//               />
//             </li>
//             <li className={s.listContent}>
//               <h2 className={s.titleInfo}>Техпідтримка</h2>
//               <p className={s.info}>Сайт працює — ви спокійні</p>
//               <Image
//                 src="/image/effective/redesign-mobile.png"
//                 alt="technical-support"
//                 width={64}
//                 height={64}
//               />
//               <Image
//                 src="/image/effective/redesign-mobile.png"
//                 alt="technical-support"
//                 width={40}
//                 height={40}
//               />
//               <Image
//                 src="/image/effective/redesign-mobile.png"
//                 alt="technical-support"
//                 width={40}
//                 height={40}
//               />
//               <Image
//                 src="/image/effective/redesign-mobile.png"
//                 alt="technical-support"
//                 width={40}
//                 height={40}
//               />
//               <Image
//                 src="/image/effective/redesign-mobile.png"
//                 alt="technical-support"
//                 width={40}
//                 height={40}
//               />
//             </li>
//           </ul>
//         </div>
//       </Container>
//     </section>
//   );
// }
import Container from '@/shared/container/Container';
import s from './EffectiveSolutions.module.scss';
import { ListEffectiveSolutions } from './ListEffectiveSolutions/ListEffectiveSolutions';
import { initServerI18n } from '@/i18n/utils/serverI18n';
export default async function EffectiveSolutions({ locale }) {
  const { t } = await initServerI18n(locale, ['effectiveSolutions']);
  const solutions = t('solutions', { returnObjects: true }) || [];

  return (
    <section className={s.section}>
      <Container>
        <div className={s.containerContent}>
          <h2 className={s.title}>
            <span className={s.spanTitle}>{t('spanTitle')}</span> {t('title')}
          </h2>
          <p className={s.description}>
            {t('descriptionBefore')}{' '}
            <span className={s.SpanDescription}>{t('SpanDescription')}</span>{' '}
            {t('descriptionAfter')}
          </p>

          <ListEffectiveSolutions items={solutions} />
        </div>
      </Container>
    </section>
  );
}
