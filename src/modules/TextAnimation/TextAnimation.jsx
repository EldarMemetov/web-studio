// import s from './TextAnimation.module.scss';
// import Container from '@/shared/container/Container';
// export default function TextAnimation() {
//   return (
//     <section>
//       <Container>
//         <div>
//           <div>
//             <h2 className={s.textInterested}>зацікавило?</h2>
//           </div>
//           <div>
//             <h2 className={s.textGo}>тоді давай</h2>
//           </div>
//           <div className={s.containerWork}>
//             <h2 className={s.textWork}>співпрацювати</h2>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }
'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Подключаем стили для AOS
import s from './TextAnimation.module.scss';
import Container from '@/shared/container/Container';

export default function TextAnimation() {
  // Инициализируем AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out-bounce', // Для плавного эффекта
      once: true, // Анимация будет запускаться только один раз
      offset: 100, // Отступ до начала анимации
    });
  }, []);

  return (
    <section>
      <Container>
        <div>
          <div>
            <h2
              className={s.textInterested}
              data-aos="zoom-in-up"
              data-aos-delay="300"
            >
              зацікавило?
            </h2>
          </div>
          <div>
            <h2 className={s.textGo} data-aos="zoom-in-up" data-aos-delay="500">
              тоді давай
            </h2>
          </div>
          <div
            className={s.containerWork}
            data-aos="zoom-in-up"
            data-aos-delay="700"
          >
            <h2 className={s.textWork}>співпрацювати</h2>
          </div>
        </div>
      </Container>
    </section>
  );
}
