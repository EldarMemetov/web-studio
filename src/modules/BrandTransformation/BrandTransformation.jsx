import AnimationInitializer from '@/shared/AnimationInitializer/AnimationInitializer';
import Container from '@/shared/container/Container';
import styles from './BrandTransformation.module.scss';
import { initServerI18n } from '@/i18n/utils/serverI18n';
import ListBrand from './ListBrand/ListBrand';

export default async function BrandTransformation({ locale }) {
  const { t } = await initServerI18n(locale, ['brandTransformation']);

  return (
    <section className={styles.section}>
      <Container>
        <AnimationInitializer
          options={{
            duration: 1200,
            easing: 'ease-in-out',
            offset: 50,
          }}
        />
        <div>
          <h2 className={styles.title} data-aos="fade-up">
            {t('titleStart')}
            <span
              className={styles.titleAnd}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {t('titleHighlight')}
            </span>
          </h2>
          <ListBrand
            items={t('items', { returnObjects: true }) || []}
            data-aos="fade-up"
            data-aos-delay="500"
          />
        </div>
      </Container>
    </section>
  );
}
