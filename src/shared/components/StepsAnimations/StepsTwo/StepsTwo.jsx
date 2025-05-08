'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import AnimationInitializer from '@/shared/AnimationInitializer/AnimationInitializer';
import s from './StepsTwo.module.scss';

export default function StepsTwo() {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    const el = containerRef.current;
    if (el) obs.observe(el);
    return () => el && obs.unobserve(el);
  }, []);

  return (
    <>
      <AnimationInitializer options={{ duration: 800, once: true }} />

      <div className={s.container} ref={containerRef}>
        <div className={s.imgWrapper}>
          <Image
            src="/image/steps-two.png"
            alt="img1"
            className={s.imgOne}
            width={240}
            height={76}
            {...(inView && { 'data-aos': 'fade-down' })}
          />

          <div
            className={s.centerImage}
            {...(inView && { 'data-aos': 'fade' })}
          >
            <Image
              src="/image/steps-two.png"
              alt="img2"
              className={s.imgOne}
              width={264}
              height={76}
            />
          </div>

          <Image
            src="/image/steps-two.png"
            alt="img3"
            className={s.imgOne}
            width={240}
            height={76}
            {...(inView && { 'data-aos': 'fade-up' })}
          />

          <Image
            src="/image/steps-two-desktop.png"
            alt="img1"
            className={s.imgOneDesktop}
            width={400}
            height={72}
            {...(inView && { 'data-aos': 'fade-down' })}
          />

          <div
            className={s.centerImage}
            {...(inView && { 'data-aos': 'fade' })}
          >
            <Image
              src="/image/steps-two-desktop.png"
              alt="img2"
              className={s.imgOneDesktop}
              width={457}
              height={84}
            />
          </div>

          <Image
            src="/image/steps-two-desktop.png"
            alt="img3"
            className={s.imgOneDesktop}
            width={400}
            height={72}
            {...(inView && { 'data-aos': 'fade-up' })}
          />
        </div>
      </div>
    </>
  );
}
