import Container from '@/shared/container/Container';
import Image from 'next/image';
import s from './Portfolio.module.scss';
import Icon from '@/shared/Icon/Icon';

export default function Portfolio() {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.text}>
          <h2 className={s.title}>
            <span className={s.titleAccent}>переконайся</span> сам
          </h2>
          <h3 className={s.subtitle}>це наші проекти</h3>
        </div>
        <div className={s.containerVideo}>
          <div className={s.videoWrapper}>
            <h4 className={s.textInfo}>[відеопродакшн]</h4>
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
            <button className={s.button}>
              Переглянути всі роботи
              <Icon iconName="icon-arrow" className={s.icon} />
            </button>
          </div>
          <div></div>
        </div>
        <div className={s.containerImage}>
          <h4 className={s.textInfoDesktop}>[веб-розробка]</h4>
          <div className={s.preview}>
            <div className={s.row}>
              <h4 className={s.textInfoWeb}>[веб-розробка]</h4>
              <div className={s.frame}>
                <div className={s.scroll}>
                  <Image
                    src="/image/harmony.png"
                    alt="harmony"
                    width={392}
                    height={870}
                    className={s.organic}
                  />
                </div>
              </div>
              <div className={s.frame}>
                <div className={s.scroll}>
                  <Image
                    src="/image/organic.jpg"
                    alt="organic"
                    width={392}
                    height={620}
                    className={s.organic}
                  />
                </div>
              </div>
              <div className={s.frame}>
                <div className={s.scroll}>
                  <Image
                    src="/image/web.png"
                    alt="web"
                    width={392}
                    height={250}
                    className={s.organic}
                  />
                </div>
              </div>
              <button className={s.buttonWeb}>
                Переглянути всі роботи
                <Icon iconName="icon-arrow" className={s.iconWeb} />
              </button>
            </div>
          </div>
          <button className={s.buttonDesktop}>
            Переглянути всі роботи
            <Icon iconName="icon-arrow" className={s.iconDesktop} />
          </button>
        </div>
      </Container>
    </section>
  );
}
