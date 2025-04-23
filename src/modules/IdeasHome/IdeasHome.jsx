'use client';
import Container from '@/shared/container/Container';
import s from './IdeasHome.module.scss';
import LaptopWrite from './LaptopWrite/LaptopWrite';
import ButtonArrow from '@/shared/components/ButtonArrow/ButtonArrow';

export default function IdeasHome() {
  return (
    <section className={s.section}>
      <Container>
        <h2 className={s.title}>
          ваші ідеї — наша
          <span className={s.titleSpan}>реалізація</span>
        </h2>
        <div>
          <div>
            <LaptopWrite />
            <h3>Веб-розробка</h3>
            <p>Напрямки, які реалізовуємо:</p>
            <ul>
              <li>
                <p>Вебсайти</p>
              </li>
              <li>
                <p>Лендінги</p>
              </li>
              <li>
                <p>Адаптивний дизайн</p>
              </li>
              <li>
                <p>Інтернет-магазини</p>
              </li>
              <li>
                <p>Технічна підтримка</p>
              </li>
              <li>
                <p>SEO-оптимізація</p>
              </li>
              <li>
                <p>UX/UI дизайн</p>
              </li>
            </ul>
            <p>Клікай, щоб замовити зараз</p>
            <ButtonArrow />
          </div>
        </div>
      </Container>
    </section>
  );
}
