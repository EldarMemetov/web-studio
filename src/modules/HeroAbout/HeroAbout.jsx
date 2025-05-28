import Container from '@/shared/container/Container';
import ScrollButton from '@/shared/ScrollButton/ScrollButton';
import s from './HeroAbout.module.scss';
export default function HeroAbout() {
  return (
    <section className={s.section}>
      <Container>
        <div>
          <div>
            <h1 className={s.title}>Ми — QVRIX Studio</h1>
            <p className={s.description}>
              Креативна команда, що створює сайти, дизайн і відео — перетворюючи
              ваші ідеї на сильні digital-рішення з реальними результатами.
            </p>
            <div className={s.containerButton}>
              <ScrollButton targetId="feedback-form" variant="variant2">
                Поговоримо
              </ScrollButton>

              <ScrollButton targetId="ideas-home" variant="variant3">
                Наші послуги
              </ScrollButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
