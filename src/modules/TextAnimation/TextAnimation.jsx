// 'use client';
// import { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Подключаем стили для AOS
// import s from './TextAnimation.module.scss';
// import Container from '@/shared/container/Container';

// export default function TextAnimation() {
//   // Инициализируем AOS
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       easing: 'ease-in-out-bounce', // Для плавного эффекта
//       once: true, // Анимация будет запускаться только один раз
//       offset: 100, // Отступ до начала анимации
//     });
//   }, []);

//   return (
//     <section>
//       <Container>
//         <div>
//           <div>
//             <h2
//               className={s.textInterested}
//               data-aos="zoom-in-up"
//               data-aos-delay="300"
//             >
//               зацікавило?
//             </h2>
//           </div>
//           <div>
//             <h2 className={s.textGo} data-aos="zoom-in-up" data-aos-delay="500">
//               тоді давай
//             </h2>
//           </div>
//           <div
//             className={s.containerWork}
//             data-aos="zoom-in-up"
//             data-aos-delay="700"
//           >
//             <h2 className={s.textWork}>співпрацювати</h2>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }

'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import s from './TextAnimation.module.scss';
import Container from '@/shared/container/Container';

gsap.registerPlugin(ScrollTrigger);

export default function TextAnimation() {
  const sectionRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    const sections = textRefs.current;

    // Создаем timeline для плавных переходов
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=300%', // Длина скролла
        scrub: 1, // Плавность
        pin: true, // Фиксируем секцию на экране
        snap: 1 / (sections.length - 1), // Фиксируем скролл по секциям
      },
    });

    sections.forEach((el, index) => {
      if (index > 0) {
        tl.to(sections[index - 1], {
          x: '-100%', // Уходит влево
          opacity: 0,
          scale: 0.8,
          duration: 0.7,
          ease: 'power2.inOut',
        }).fromTo(
          el,
          { x: '100%', opacity: 0, scale: 1.2 },
          { x: '0%', opacity: 1, scale: 1, duration: 0.7, ease: 'power2.out' }
        );
      } else {
        tl.fromTo(
          el,
          { x: '100%', opacity: 0, scale: 1.2 },
          { x: '0%', opacity: 1, scale: 1, duration: 0.7, ease: 'power2.out' }
        );
      }
    });

    // Анимация последнего слова (по буквам с вращением)
    const lastWord = sections[2];
    const letters = lastWord.querySelectorAll('span');

    gsap.set(letters, { opacity: 0, rotateY: 180 });

    tl.to(letters, {
      opacity: 1,
      rotateY: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'back.out(1.7)',
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className={s.section}>
      <Container>
        <div className={s.textContainer}>
          <div ref={(el) => (textRefs.current[0] = el)} className={s.text}>
            <h2 className={s.textInterested}>зацікавило?</h2>
          </div>
          <div ref={(el) => (textRefs.current[1] = el)} className={s.text}>
            <h2 className={s.textGo}>тоді давай</h2>
          </div>
          <div ref={(el) => (textRefs.current[2] = el)} className={s.text}>
            <h2 className={s.textWork}>
              <span>с</span>
              <span>п</span>
              <span>і</span>
              <span>в</span>
              <span>п</span>
              <span>р</span>
              <span>а</span>
              <span>ц</span>
              <span>ю</span>
              <span>в</span>
              <span>а</span>
              <span>т</span>
              <span>и</span>
            </h2>
          </div>
        </div>
      </Container>
    </section>
  );
}
