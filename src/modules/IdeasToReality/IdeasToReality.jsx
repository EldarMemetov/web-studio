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
