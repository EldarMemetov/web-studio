import AnimationInitializer from '../../../shared/AnimationInitializer/AnimationInitializer';
import styles from './TitleHome.module.scss';
import Container from '@/shared/container/Container';
import Button from '../../../shared/components/button/Button';
import Image from 'next/image';
import { initServerI18n } from '@/i18n/utils/serverI18n';
export default async function TitleHome({ locale }) {
  const { t } = await initServerI18n(locale, ['titleHome']);
  return (
    <section className={styles.section}>
      <Container>
        <AnimationInitializer
          options={{
            duration: 1500,
            easing: 'ease-in-out-bounce',
            offset: 20,
          }}
        />
        <div className={styles.wrapper}>
          <div className={styles.overlayText}>
            <div className={styles.containerText}>
              <h1 className={styles.title} data-aos="fade-up">
                {t('title')}
              </h1>
              <p
                className={styles.description}
                data-aos="fade-up"
                data-aos-delay="500"
              >
                {t('description')}
              </p>
              <div className={styles.containerButton}>
                <Button
                  variant="variant3"
                  data-aos="zoom-in"
                  data-aos-delay="1000"
                >
                  {t('contactButton')}
                </Button>
                <Button
                  variant="variant2"
                  data-aos="zoom-in"
                  data-aos-delay="1000"
                >
                  {t('servicesButton')}
                </Button>
              </div>
            </div>
          </div>
          <div className={styles.cube}>
            <Image
              src="/image/3d-shape.png"
              alt="3D Cube"
              width={563}
              height={586}
              className={styles.cubeFace}
              data-aos="zoom-in"
              data-aos-delay="1000"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
