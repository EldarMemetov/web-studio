import Container from '@/shared/container/Container';
import styles from './BrandTransformation.module.scss';
import { initServerI18n } from '@/i18n/utils/serverI18n';
import ListBrand from './ListBrand/ListBrand';

export default async function BrandTransformation({ locale }) {
  const { t } = await initServerI18n(locale, ['brandTransformation']);

  return (
    <section className={styles.section}>
      <Container>
        <div>
          <h2 className={styles.title}>
            {t('titleStart')}
            <span className={styles.titleAnd}>{t('titleHighlight')}</span>
          </h2>
          <ListBrand items={t('items', { returnObjects: true }) || []} />
        </div>
      </Container>
    </section>
  );
}
