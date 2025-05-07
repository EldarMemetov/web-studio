'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import s from './StepsTwo.module.scss';

export default function StepsTwo() {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const imgRef = useRef(null); // добавили imgRef для отслеживания
  const [inView, setInView] = useState(false);

  // Наблюдение за imgRef (центральное изображение)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    const currentImgRef = imgRef.current;

    if (currentImgRef) {
      observer.observe(currentImgRef);
    }

    return () => {
      if (currentImgRef) {
        observer.unobserve(currentImgRef);
      }
    };
  }, []);

  // GSAP-анимация
  useEffect(() => {
    const container = containerRef.current;
    const wrapper = wrapperRef.current;
    if (!container || !wrapper) return;

    gsap.killTweensOf(wrapper);
    container.style.overflow = 'hidden';

    const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

    if (inView) {
      tl.to(wrapper, { y: 40, duration: 5 })
        .add(() => (container.style.overflow = 'visible'))
        .to(
          wrapper.children[1],
          { scale: 1.3, duration: 1.2, zIndex: 2 },
          '-=1'
        );
    } else {
      tl.to(wrapper, { y: 0, duration: 5 })
        .add(() => (container.style.overflow = 'hidden'))
        .to(wrapper.children[1], { scale: 1, duration: 0.5 }, '<');
    }

    return () => tl.kill();
  }, [inView]);

  return (
    <div className={s.container} ref={containerRef}>
      <div className={s.imgWrapper} ref={wrapperRef}>
        <Image src="/image/steps-two.png" alt="img1" width={240} height={76} />
        <Image
          ref={imgRef} // <- ref для наблюдения
          src="/image/steps-two.png"
          alt="img2"
          width={240}
          height={76}
        />
        <Image src="/image/steps-two.png" alt="img3" width={240} height={76} />
      </div>
    </div>
  );
}
