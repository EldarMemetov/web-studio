// import Container from '@/shared/container/Container';
// import Icon from '@/shared/Icon/Icon';
// import styles from './GetBusinessSolutions.module.scss';
// import { initServerI18n } from '@/i18n/utils/serverI18n';
// export default async function GetBusinessSolutions({ locale }) {
//   const { t } = await initServerI18n(locale, ['getBusinessSolutions']);
//   return (
//     <section>
//       <Container>
//         <div>
//           <h2 className={styles.newTitle}>
//             {t('titleStart')}{' '}
//             <span className={styles.spanNewTitle}>{t('titleHighlight')}</span>
//           </h2>
//           <ul className={styles.containerList}>
//             <li className={styles.itemList}>
//               <div className={styles.mainContent}>
//                 <Icon iconName="icon-game" className={styles.game} />
//                 <h3 className={styles.title}>{t('title')}</h3>
//               </div>
//               <p className={styles.description}>{t('description')}</p>
//             </li>
//             <li className={styles.itemList}>
//               <div className={styles.mainContent}>
//                 <Icon iconName="icon-game" className={styles.game} />
//                 <h3 className={styles.title}>Індивідуальний підхід</h3>
//               </div>

//               <p className={styles.description}>
//                 Ми підлаштовуємо наші рішення під ваші цілі, створюючи сайти та
//                 відео, які підкреслюють стиль і унікальність вашого бренду
//                 Індивідуальний підхід
//               </p>
//             </li>
//             <li className={styles.itemList}>
//               <div className={styles.mainContent}>
//                 <Icon iconName="icon-game" className={styles.game} />
//                 <h3 className={styles.title}>Довіра та надійність</h3>
//               </div>

//               <p className={styles.description}>
//                 Прозорість, дотримання термінів та високі результати — основа
//                 нашої співпраці Довіра та надійність
//               </p>
//             </li>
//             <li className={styles.itemList}>
//               <div className={styles.mainContent}>
//                 <Icon iconName="icon-game" className={styles.game} />
//                 <h3 className={styles.title}>Креативність та інновації</h3>
//               </div>

//               <p className={styles.description}>
//                 Ми створюємо унікальні продукти, що поєднують творчість із
//                 сучасними технологіями Креативність та інновації
//               </p>
//             </li>
//             <li className={styles.itemList}>
//               <div className={styles.mainContent}>
//                 <Icon iconName="icon-game" className={styles.game} />
//                 <h3 className={styles.title}>Підтримка та розвиток</h3>
//               </div>

//               <p className={styles.description}>
//                 Ми допомагаємо вам рости. Готові підтримувати, оновлювати та
//                 покращувати ваш сайт чи відеоконтент, щоб він завжди залишався
//                 актуальним. Підтримка та розвиток
//               </p>
//             </li>
//             <li className={styles.itemList}>
//               <div className={styles.mainContent}>
//                 <Icon iconName="icon-game" className={styles.game} />
//                 <h3 className={styles.title}>Технологічні рішення</h3>
//               </div>

//               <p className={styles.description}>
//                 Для малого та середнього бізнесу, створюємо сайти і відео,
//                 адаптовані до ваших завдань, що залучають клієнтів і виділяють
//                 ваш бізнес Технологічні рішення
//               </p>
//             </li>
//           </ul>
//         </div>
//       </Container>
//     </section>
//   );
// }
import Container from '@/shared/container/Container';
import { initServerI18n } from '@/i18n/utils/serverI18n';
import List from './List/List';
import styles from './GetBusinessSolutions.module.scss';

export default async function GetBusinessSolutions({ locale }) {
  const { t } = await initServerI18n(locale, ['getBusinessSolutions']);

  return (
    <section>
      <Container>
        <div>
          <h2 className={styles.newTitle}>
            {t('titleStart')}{' '}
            <span className={styles.spanNewTitle}>{t('titleHighlight')}</span>
          </h2>

          <List items={t('items', { returnObjects: true }) || []} />
        </div>
      </Container>
    </section>
  );
}
