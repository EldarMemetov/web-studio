import Container from '@/shared/container/Container';
import { initServerI18n } from '@/i18n/utils/serverI18n';
import IdeasList from './IdeasList/IdeasList';
import styles from './IdeasHome.module.scss';
import Button from '@/shared/components/button/Button';

export default async function IdeasHome({ locale }) {
  const { t } = await initServerI18n(locale, ['ideasHome']);

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.contentContainer}>
          <h2 className={styles.title}>
            {t('section.title')}
            <span className={styles.titleSpan}> {t('section.subTitle')}</span>
          </h2>

          <IdeasList
            items={t('section.sections', { returnObjects: true }) || []}
          />
          <Button variant="variant2">Хочу все й з бонусом</Button>
        </div>
      </Container>
    </section>
  );
}
