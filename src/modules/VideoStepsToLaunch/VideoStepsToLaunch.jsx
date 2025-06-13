import Container from '@/shared/container/Container';
import { initServerI18n } from '@/i18n/utils/serverI18n';
import StepsList from './VideoStepsList/VideoStepsList';
import styles from './VideoStepsToLaunch.module.scss';

export default async function VideoStepsToLaunch({ locale }) {
  const { t } = await initServerI18n(locale, ['stepsToLaunch']);

  return (
    <section className={styles.section}>
      <div className={styles.background}></div>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>
            {t('title.prefix')}
            <span className={styles.titleSpan}>{t('title.highlighted')}</span>
            {t('title.between')}
            <span className={styles.titleSpan}>
              {t('title.highlightedNext')}
            </span>
          </h2>
          <p className={styles.description}>
            <span className={styles.spanDescription}>{t('subtitle')}</span>
            {t('subtitleAnd')}
          </p>
          <div className={styles.lineContainer}>
            <div className={styles.line} />
            <StepsList items={t('steps', { returnObjects: true })} />
          </div>
        </div>
      </Container>
    </section>
  );
}
