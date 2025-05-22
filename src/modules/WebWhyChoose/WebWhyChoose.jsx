import Container from '@/shared/container/Container';
import s from './WebWhyChoose.module.scss';
import { initServerI18n } from '@/i18n/utils/serverI18n';
import ListWebWhyChoose from './ListWebWhyChoose/ListWebWhyChoose';

export default async function WebWhyChoose({
  locale,
  namespace = 'webWhyChoose',
}) {
  const { t } = await initServerI18n(locale, [namespace]);
  const features = t('features', { returnObjects: true }) || [];

  return (
    <section className={s.section}>
      <div className={s.background}></div>
      <Container>
        <div className={s.containerContent}>
          <div className={s.containerTitle}>
            <h2 className={s.title}>
              {t('title')} <span className={s.titleSpan}>{t('spanTitle')}</span>
            </h2>
            <p className={s.description}>
              {t('descriptionBefore')}
              <span className={s.spanWeight}>{t('spanDescriptionOne')}</span>
              {t('descriptionMiddle')}
              <span className={s.spanWeight}>{t('spanDescriptionTwo')}</span>
              <span className={s.spanDescription}>{t('descriptionAfter')}</span>
            </p>
          </div>
          <ListWebWhyChoose items={features} />
        </div>
      </Container>
    </section>
  );
}
