import Container from '@/shared/container/Container';
import s from './WebPortfolio.module.scss';
export default function WebPortfolio() {
  return (
    <section className={s.section}>
      <div className={s.background}></div>
      <Container>
        <div>
          <h2 className={s.title}>
            Наші реалізовані <span className={s.SpanTitle}>проєкти</span>
          </h2>
          <p className={s.descriptions}>
            QVRIX пропонує повний спектр рішень — від концепції до запуску. Ми
            адаптуємось під ваш бізнес, щоб створити ефективні,{' '}
            <span className={s.SpanDescriptions}>
              красиві й функціональні сайти,
            </span>
            <span>які дійсно працюють.</span>
          </p>
        </div>
      </Container>
    </section>
  );
}
