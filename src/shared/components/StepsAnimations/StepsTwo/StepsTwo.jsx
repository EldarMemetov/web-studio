'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import s from './StepsTwo.module.scss';

export default function StepsTwo() {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const centerImageRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          } else {
            setInView(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentImgRef = centerImageRef.current;

    if (currentImgRef) {
      observer.observe(currentImgRef);
    }

    return () => {
      if (currentImgRef) {
        observer.unobserve(currentImgRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!inView) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

      // Начальная позиция
      tl.set(wrapperRef.current, { y: '100px' }); // Начальная точка (не обязательно, так как по умолчанию y: 0)

      // Плавное движение
      tl.to(wrapperRef.current, {
        y: '-5px', // Конечная позиция (вверх)
        duration: 3, // Продолжительность анимации
      }).to(
        centerImageRef.current,
        {
          scale: 1.3,
          duration: 1.2,
          zIndex: 2,
        },
        '-=1'
      );
    }, containerRef);

    return () => ctx.revert();
  }, [inView]);

  return (
    <div className={s.container} ref={containerRef}>
      <div className={s.imgWrapper} ref={wrapperRef}>
        <Image src="/image/steps-two.png" alt="img1" width={200} height={76} />
        <Image
          src="/image/steps-two.png"
          alt="img2"
          width={200}
          height={76}
          ref={centerImageRef}
          className={s.centerImage}
        />
        <Image src="/image/steps-two.png" alt="img3" width={200} height={76} />
      </div>
    </div>
  );
}
