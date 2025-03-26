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
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import s from './TextAnimation.module.scss';
import Container from '@/shared/container/Container';

gsap.registerPlugin(ScrollTrigger);

export default function TextAnimation() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    // Взрывная анимация для текста
    gsap.fromTo(
      section.querySelectorAll(
        `.${s.textInterested}, .${s.textGo}, .${s.textWork}`
      ),
      {
        opacity: 0,
        y: 100,
        scale: 0.8,
        rotationX: 45,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationX: 0,
        stagger: 0.4,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom top',
          scrub: true,
        },
      }
    );

    // Взрывная анимация для окружности
    gsap.fromTo(
      section.querySelector(`.${s.containerWork}::before`),
      { scale: 0, opacity: 0 },
      {
        scale: 1.5,
        opacity: 0.8,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef}>
      <Container>
        <div>
          <div>
            <h2 className={s.textInterested}>зацікавило?</h2>
          </div>
          <div>
            <h2 className={s.textGo}>тоді давай</h2>
          </div>
          <div className={s.containerWork}>
            <h2 className={s.textWork}>співпрацювати</h2>
          </div>
        </div>
      </Container>
    </section>
  );
}
