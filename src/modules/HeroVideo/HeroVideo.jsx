import Container from '@/shared/container/Container';
import s from './HeroVideo.module.scss';

export default function HeroVideo() {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.videoWrapper}>
          <h1 className={s.title}>
            Qvrix створює відео, які формують імідж бренду — від ідеї до
            фінального монтажу. Професійний контент для впізнаваності, залучення
            клієнтів і зміцнення довіри.
          </h1>
        </div>
      </Container>
    </section>
  );
}
