// import s from './TextAnimation.module.scss';
// import Container from '@/shared/container/Container';
// import AnimationInitializer from '@/shared/AnimationInitializer/AnimationInitializer';
// export default function TextAnimation() {
//   <AnimationInitializer
//     options={{
//       duration: 1500,
//       easing: 'ease-in-out-bounce',
//       offset: 20,
//     }}
//   />;
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
//           end: '+=500%',
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
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import s from './TextAnimation.module.scss';
import Container from '@/shared/container/Container';

gsap.registerPlugin(ScrollTrigger);

export default function TextAnimation() {
  const sectionRef = useRef(null);
  const textRefs = useRef([]);
  const staticRefs = useRef([]);
  const [animationPlayed, setAnimationPlayed] = useState(false);

  useEffect(() => {
    const sections = textRefs.current;
    // Создаем timeline, привязанный к скроллу
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=500%', // регулировать в зависимости от количества секций
        scrub: true, // анимация синхронизирована со скроллом
        pin: true, // пинит секцию на экране до завершения анимации
        onLeave: (self) => {
          // Если пользователь проскроллил дальше, принудительно переводим timeline в финальное состояние
          tl.progress(1);
          setAnimationPlayed(true);
          self.kill(); // деактивируем ScrollTrigger, чтобы он больше не реагировал на скролл
        },
      },
      onComplete: () => setAnimationPlayed(true),
    });

    // Эффект перелистывания: каждая секция уходит влево, а следующая появляется справа
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

    // Анимация букв последнего текстового блока (например, слово "співпрацювати")
    const lastText = sections[sections.length - 1];
    const letters = lastText.querySelectorAll('span');
    gsap.set(letters, { opacity: 0, rotateY: 180 });
    tl.to(letters, {
      opacity: 1,
      rotateY: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'back.out(1.7)',
    });
  }, []);

  // После завершения основной анимации (при флаге animationPlayed === true)
  // можно запустить дополнительную анимацию для статичного контейнера,
  // если требуется. Например, плавное появление остальных блоков.
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
            <div ref={(el) => (textRefs.current[1] = el)} className={s.text}>
              <h2 className={s.textInterested}>зацікавило?</h2>
            </div>
            <div ref={(el) => (textRefs.current[2] = el)} className={s.text}>
              <h2 className={s.textGo}>тоді давай</h2>
            </div>
            <div ref={(el) => (textRefs.current[3] = el)} className={s.text}>
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
          // Статичный контейнер после завершения анимации (остается на финальном блоке)
          <div className={s.staticContainer}>
            <h2
              ref={(el) => (staticRefs.current[1] = el)}
              className={s.staticText}
            >
              зацікавило?
            </h2>
            <h2
              ref={(el) => (staticRefs.current[2] = el)}
              className={s.staticText}
            >
              тоді давай
            </h2>
            <h2
              ref={(el) => (staticRefs.current[3] = el)}
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
