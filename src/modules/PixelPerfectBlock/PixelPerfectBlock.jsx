import Container from '@/shared/container/Container';
import s from './PixelPerfectBlock.module.scss';
const PixelPerfectBlock = () => (
  <section className={s.sectionBlock}>
    <Container>
      <div className="pixel-perfect-block">
        <p className={s.description}>
          <span className={s.title}>з турботою</span> про кожен піксель Ми
          створюємо <span className={s.title}>сучасні</span> вебсайти та{' '}
          <span>професійні</span> відеоролики, які підкреслюють унікальність
          вашого бізнесу та допомагають досягти{' '}
          <span className={s.title}>успіху</span> в цифровому світі
        </p>
      </div>
    </Container>
  </section>
);

export default PixelPerfectBlock;
