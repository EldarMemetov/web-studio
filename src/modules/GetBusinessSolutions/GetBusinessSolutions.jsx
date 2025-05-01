import Container from '@/shared/container/Container';
import { initServerI18n } from '@/i18n/utils/serverI18n';
import List from './List/List';
import styles from './GetBusinessSolutions.module.scss';

export default async function GetBusinessSolutions({ locale }) {
  const { t } = await initServerI18n(locale, ['getBusinessSolutions']);

  return (
    <section className={styles.section}>
      <div className={styles.background}></div>
      <Container>
        <div className={styles.contentContainer}>
          <h2 className={styles.newTitle} data-aos="fade-up">
            {t('titleStart')}
            <span
              className={styles.spanNewTitle}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {t('titleHighlight')}
            </span>
          </h2>

          <List
            items={t('items', { returnObjects: true }) || []}
            data-aos="fade-up"
            data-aos-delay="500"
          />
        </div>
      </Container>
    </section>
  );
}
