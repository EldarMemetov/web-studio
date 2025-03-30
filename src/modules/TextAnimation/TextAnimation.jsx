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

// 'use client';
// import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import s from './TextAnimation.module.scss';
// import Container from '@/shared/container/Container';

// gsap.registerPlugin(ScrollTrigger);

// export default function TextAnimation() {
//   const sectionRef = useRef(null);
//   const textRefs = useRef([]);

//   useEffect(() => {
//     const sections = textRefs.current;

//     // Создаем timeline для плавных переходов
//     let tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: 'top top',
//         end: '+=300%', // Длина скролла
//         scrub: 1, // Плавность
//         pin: true, // Фиксируем секцию на экране
//         snap: 1 / (sections.length - 1), // Фиксируем скролл по секциям
//       },
//     });

//     sections.forEach((el, index) => {
//       if (index > 0) {
//         tl.to(sections[index - 1], {
//           x: '-100%', // Уходит влево
//           opacity: 0,
//           scale: 0.8,
//           duration: 0.7,
//           ease: 'power2.inOut',
//         }).fromTo(
//           el,
//           { x: '100%', opacity: 0, scale: 1.2 },
//           { x: '0%', opacity: 1, scale: 1, duration: 0.7, ease: 'power2.out' }
//         );
//       } else {
//         tl.fromTo(
//           el,
//           { x: '100%', opacity: 0, scale: 1.2 },
//           { x: '0%', opacity: 1, scale: 1, duration: 0.7, ease: 'power2.out' }
//         );
//       }
//     });

//     // Анимация последнего слова (по буквам с вращением)
//     const lastWord = sections[2];
//     const letters = lastWord.querySelectorAll('span');

//     gsap.set(letters, { opacity: 0, rotateY: 180 });

//     tl.to(letters, {
//       opacity: 1,
//       rotateY: 0,
//       duration: 0.8,
//       stagger: 0.1,
//       ease: 'back.out(1.7)',
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((st) => st.kill());
//     };
//   }, []);

//   return (
//     <section ref={sectionRef} className={s.section}>
//       <Container>
//         <div className={s.textContainer}>
//           <div ref={(el) => (textRefs.current[0] = el)} className={s.text}>
//             <h2 className={s.textInterested}>зацікавило?</h2>
//           </div>
//           <div ref={(el) => (textRefs.current[1] = el)} className={s.text}>
//             <h2 className={s.textGo}>тоді давай</h2>
//           </div>
//           <div ref={(el) => (textRefs.current[2] = el)} className={s.text}>
//             <h2 className={s.textWork}>
//               <span>с</span>
//               <span>п</span>
//               <span>і</span>
//               <span>в</span>
//               <span>п</span>
//               <span>р</span>
//               <span>а</span>
//               <span>ц</span>
//               <span>ю</span>
//               <span>в</span>
//               <span>а</span>
//               <span>т</span>
//               <span>и</span>
//             </h2>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }
// 'use client';
// import { useEffect, useRef, useState } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import s from './TextAnimation.module.scss';
// import Container from '@/shared/container/Container';

// gsap.registerPlugin(ScrollTrigger);

// export default function TextAnimation() {
//   const sectionRef = useRef(null);
//   const textRefs = useRef([]);
//   const [animationPlayed, setAnimationPlayed] = useState(false);

//   useEffect(() => {
//     const sections = textRefs.current;

//     const createAnimation = () => {
//       let tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: 'top top',
//           end: '+=300%',
//           scrub: false,
//           pin: true,
//           snap: 1 / (sections.length - 1),
//           onLeave: () => setAnimationPlayed(true), // Запоминаем, что анимация завершилась
//         },
//       });

//       sections.forEach((el, index) => {
//         if (index > 0) {
//           tl.to(sections[index - 1], {
//             x: '-100%',
//             opacity: 0,
//             scale: 0.8,
//             duration: 0.7,
//             ease: 'power2.inOut',
//           }).fromTo(
//             el,
//             { x: '100%', opacity: 0, scale: 1.2 },
//             { x: '0%', opacity: 1, scale: 1, duration: 0.7, ease: 'power2.out' }
//           );
//         } else {
//           tl.fromTo(
//             el,
//             { x: '100%', opacity: 0, scale: 1.2 },
//             { x: '0%', opacity: 1, scale: 1, duration: 0.7, ease: 'power2.out' }
//           );
//         }
//       });

//       const lastWord = sections[2];
//       const letters = lastWord.querySelectorAll('span');

//       gsap.set(letters, { opacity: 0, rotateY: 180 });

//       tl.to(letters, {
//         opacity: 1,
//         rotateY: 0,
//         duration: 0.8,
//         stagger: 0.1,
//         ease: 'back.out(1.7)',
//       });
//     };

//     if (!animationPlayed) {
//       createAnimation();
//     } else {
//       // Если анимация уже была, сразу показываем последнее слово
//       gsap.set(textRefs.current, { opacity: 0, x: '-100%' });
//       gsap.set(textRefs.current[2], { opacity: 1, x: '0%' });
//     }

//     return () => {
//       ScrollTrigger.getAll().forEach((st) => st.kill());
//     };
//   }, [animationPlayed]);

//   return (
//     <section ref={sectionRef} className={s.section}>
//       <Container>
//         <div className={s.textContainer}>
//           <div ref={(el) => (textRefs.current[0] = el)} className={s.text}>
//             <h2 className={s.textInterested}>зацікавило?</h2>
//           </div>
//           <div ref={(el) => (textRefs.current[1] = el)} className={s.text}>
//             <h2 className={s.textGo}>тоді давай</h2>
//           </div>
//           <div ref={(el) => (textRefs.current[2] = el)} className={s.text}>
//             <h2 className={s.textWork}>
//               <span>с</span>
//               <span>п</span>
//               <span>і</span>
//               <span>в</span>
//               <span>п</span>
//               <span>р</span>
//               <span>а</span>
//               <span>ц</span>
//               <span>ю</span>
//               <span>в</span>
//               <span>а</span>
//               <span>т</span>
//               <span>и</span>
//             </h2>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }
'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import s from './TextAnimation.module.scss';
import Container from '@/shared/container/Container';

export default function TextAnimation() {
  const sectionRef = useRef(null);
  const textRefs = useRef([]);
  const staticRefs = useRef([]);
  const [animationPlayed, setAnimationPlayed] = useState(false);

  useEffect(() => {
    // Функция запуска основной анимации текста
    const startAnimation = () => {
      const sections = textRefs.current;
      const tl = gsap.timeline({
        onComplete: () => {
          setAnimationPlayed(true);
        },
      });

      // Анимация для каждого блока
      sections.forEach((el, index) => {
        if (index > 0) {
          tl.to(sections[index - 1], {
            x: '-100%',
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

      // Анимация букв последнего слова
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
    };

    // Запускаем анимацию, когда секция становится видимой (например, при 70% видимости)
    if (!animationPlayed && sectionRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              startAnimation();
              observer.disconnect();
            }
          });
        },
        { threshold: 0.7 }
      );
      observer.observe(sectionRef.current);
    }

    return () => {};
  }, [animationPlayed]);

  // Анимация статичного контейнера (вторая стадия) запускается при изменении animationPlayed на true
  useEffect(() => {
    if (animationPlayed) {
      gsap.set(staticRefs.current, { x: '100%', opacity: 0, scale: 1.2 });
      gsap.timeline().to(staticRefs.current, {
        x: '0%',
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.2,
      });
    }
  }, [animationPlayed]);

  return (
    <section ref={sectionRef} className={s.section}>
      <Container>
        {!animationPlayed ? (
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
        ) : (
          // Статичный контейнер с блоками (после завершения анимации)
          <div className={s.staticContainer}>
            <h2
              ref={(el) => (staticRefs.current[0] = el)}
              className={s.staticText}
            >
              зацікавило?
            </h2>
            <h2
              ref={(el) => (staticRefs.current[1] = el)}
              className={s.staticText}
            >
              тоді давай
            </h2>
            <h2
              ref={(el) => (staticRefs.current[2] = el)}
              className={s.staticText}
            >
              співпрацювати
            </h2>
          </div>
        )}
      </Container>
    </section>
  );
}
