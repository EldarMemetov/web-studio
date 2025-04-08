// import Container from '@/shared/container/Container';
// import Icon from '@/shared/Icon/Icon';
// import s from './IdeasToReality.module.scss';

// export default function IdeasToReality() {
//   return (
//     <section className={s.section}>
//       <Container>
//         <div>
//           <h2 className={s.title}>
//             ваші ідеї — наша
//             <span className={s.titleSpan}> реалізація</span>
//           </h2>
//           <ul>
//             <li className={s.itemList}>
//               <div className={s.card}>
//                 <div className={s.cardContent}>
//                   <Icon iconName="icon-ideas" className={s.icon} />
//                   <h3 className={s.nameIdeas}>Вебсайти</h3>
//                   <p className={s.descriptionIdeas}>
//                     Для бізнесу будь-якого масштабу
//                   </p>
//                   <h4 className={s.infoIdeas}>ВЕБСАЙТИ</h4>
//                 </div>
//               </div>
//               <button className={s.button}>
//                 <Icon iconName="icon-arrow" className={s.arrow} />
//               </button>
//             </li>
//           </ul>
//         </div>
//       </Container>
//     </section>
//   );
// }
import Container from '@/shared/container/Container';
import s from './IdeasToReality.module.scss';
import { initServerI18n } from '@/i18n/utils/serverI18n';
import IdeasList from './IdeasList/IdeasList';
export default async function IdeasToReality({ locale }) {
  const { t } = await initServerI18n(locale, ['IdeasToReality']);
  return (
    <section className={s.section}>
      <Container>
        <div>
          <h2 className={s.title}>
            {t('heading.title')}
            <span className={s.titleSpan}> {t('heading.highlight')}</span>
          </h2>
          <IdeasList items={t('items', { returnObjects: true } || [])} />
        </div>
      </Container>
    </section>
  );
}
