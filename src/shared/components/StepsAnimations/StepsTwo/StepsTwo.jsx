'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import s from './StepsTwo.module.scss';

export default function StepsTwo() {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const imgWrapperRef = useRef(null); // изменено: обёртка вместо прямого img
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    const currentImgRef = imgWrapperRef.current;

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
    const container = containerRef.current;
    const wrapper = wrapperRef.current;
    const target = imgWrapperRef.current;
    if (!container || !wrapper || !target) return;

    gsap.killTweensOf([wrapper, target]);
    container.style.overflow = 'hidden';

    const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

    if (inView) {
      tl.to(wrapper, { y: 40, duration: 5 })
        .add(() => (container.style.overflow = 'visible'))
        .to(
          target,
          { scaleX: 1.083, duration: 1.2, zIndex: 2, opacity: 1 },
          '-=1'
        );
    } else {
      tl.to(wrapper, { y: 0, duration: 9 })
        .add(() => (container.style.overflow = 'hidden'))
        .to(target, { scale: 1, duration: 0.5, opacity: 2 }, '<');
    }

    return () => tl.kill();
  }, [inView]);

  return (
    <div className={s.container} ref={containerRef}>
      <div className={s.imgWrapper} ref={wrapperRef}>
        <Image src="/image/steps-two.png" alt="img1" width={240} height={76} />
        <div className={s.centerImage} ref={imgWrapperRef}>
          <Image
            src="/image/steps-two.png"
            alt="img2"
            width={240}
            height={76}
          />
        </div>
        <Image src="/image/steps-two.png" alt="img3" width={240} height={76} />
      </div>
    </div>
  );
}
