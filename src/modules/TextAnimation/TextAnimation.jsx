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
    const elements = textRefs.current;

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=300%', // Удерживаем секцию на экране
        scrub: true,
        pin: true, // Фиксируем секцию
      },
    });

    elements.forEach((el, index) => {
      if (index > 0) {
        tl.to(elements[index - 1], {
          opacity: 0,
          scale: 0.8,
          filter: 'blur(10px)',
          duration: 0.5,
        }).to(el, { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.5 });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className={s.section}>
      <Container>
        <div className={s.textContainer}>
          <div
            ref={(el) => (textRefs.current[0] = el)}
            className={`${s.text} ${s.active}`}
          >
            <h2 className={s.textInterested}>зацікавило?</h2>
          </div>
          <div ref={(el) => (textRefs.current[1] = el)} className={s.text}>
            <h2 className={s.textGo}>тоді давай</h2>
          </div>
          <div ref={(el) => (textRefs.current[2] = el)} className={s.text}>
            <h2 className={s.textWork}>співпрацювати</h2>
          </div>
        </div>
      </Container>
    </section>
  );
}
