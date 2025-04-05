'use client';
import { useState } from 'react';
import Container from '@/shared/container/Container';
import Icon from '@/shared/Icon/Icon';
import s from './ToggleQuestions.module.scss';

export default function ToggleQuestions() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <section className={s.section}>
      <Container>
        <div>
          <h2 className={s.title}>
            виникли
            <span className={s.titleAnd}> запитання</span>
            <br />
            це нормально
          </h2>
          <div>
            <p className={s.description}>
              Ми завжди готові відповісти на всі ваші запитання. Записуйтеся на
              консультацію і ми будемо раді вам допомогти
            </p>
            <ul>
              <li
                className={`${s.containerList} ${isOpen ? s.containerOpen : ''}`}
                onClick={toggleOpen}
              >
                <div className={s.containerIcon}>
                  <h3 className={s.titleOpen}>
                    Скільки часу займає розробка сайту?
                  </h3>
                  <Icon
                    iconName="icon-open-faq"
                    className={`${s.icon} ${isOpen ? s.iconRotated : ''}`}
                  />
                </div>
                {isOpen && (
                  <p className={s.descriptionOpen}>
                    Час розробки залежить від типу сайту та ваших вимог.
                    Наприклад: Лендінг сторінку можна створити за 1-2 тижні.
                    Інтернет-магазин чи корпоративний сайт може зайняти від 3 до
                    6 тижнів, залежно від складності. Ми завжди обговорюємо всі
                    деталі на початковому етапі та погоджуємо графік роботи, щоб
                    врахувати ваші потреби.
                  </p>
                )}
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
