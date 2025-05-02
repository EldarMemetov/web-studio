import Container from '@/shared/container/Container';
import Image from 'next/image';
import s from './Portfolio.module.scss';
import Icon from '@/shared/Icon/Icon';
import { initServerI18n } from '@/i18n/utils/serverI18n';
import AnimationInitializer from '@/shared/AnimationInitializer/AnimationInitializer';
import LinkButton from '@/shared/components/LinkButton/LinkButton';
import { ROUTES } from '@/shared/constants';
export default async function Portfolio({ locale }) {
  const { t } = await initServerI18n(locale, ['portfolio']);

  return (
    <section className={s.section}>
      <Container>
        <AnimationInitializer
          options={{
            duration: 1200,
            easing: 'ease-in-out',
            offset: 50,
          }}
        />
        <div className={s.text}>
          <h2 className={s.title} data-aos="fade-up">
            <span className={s.titleAccent}>{t('title')}</span> {t('nextTitle')}
          </h2>
          <h3 className={s.subtitle} data-aos="fade-up" data-aos-delay="200">
            {t('subtitle')}
          </h3>
        </div>

        <div className={s.containerContent}>
          <div className={s.containerVideo} data-aos="zoom-in">
            <div className={s.videoWrapper}>
              <h4 className={s.textInfo}>{t('videoLabel')}</h4>
              <video
                className={s.video}
                src="/video/show.mp4"
                width={1224}
                height={440}
                autoPlay
                loop
                muted
                playsInline
              />
              <LinkButton path={`/${ROUTES.VIDEOGRAPHY}`} className={s.button}>
                {t('button')}
                <Icon iconName="icon-arrow" className={s.icon} />
              </LinkButton>
            </div>
          </div>

          <div
            className={s.containerImage}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h4 className={s.textInfoDesktop}>{t('webLabel')}</h4>
            <div className={s.preview}>
              <div className={s.row}>
                <h4 className={s.textInfoWeb}>{t('webLabel')}</h4>

                <div
                  className={s.frame}
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className={s.scroll}>
                    <Image
                      src="/image/harmony.WEBP"
                      alt="harmony"
                      width={392}
                      height={870}
                      className={s.organic}
                    />
                  </div>
                </div>

                <div
                  className={s.frame}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className={s.scroll}>
                    <Image
                      src="/image/organic.WEBP"
                      alt="organic"
                      width={392}
                      height={620}
                      className={s.organic}
                    />
                  </div>
                </div>

                <div
                  className={s.frame}
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className={s.scroll}>
                    <Image
                      src="/image/web.WEBP"
                      alt="web"
                      width={392}
                      height={250}
                      className={s.organic}
                    />
                  </div>
                </div>
                <LinkButton
                  path={`/${ROUTES.DEVELOPMENT}`}
                  className={s.buttonWeb}
                >
                  {t('button')}
                  <Icon iconName="icon-arrow" className={s.icon} />
                </LinkButton>
              </div>
            </div>
            <LinkButton
              path={`/${ROUTES.DEVELOPMENT}`}
              className={s.buttonDesktop}
            >
              {t('button')}
              <Icon iconName="icon-arrow" className={s.icon} />
            </LinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
