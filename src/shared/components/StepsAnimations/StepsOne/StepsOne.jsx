'use client';

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import s from './StepsOne.module.scss';

export default function StepsOne() {
  const imgRef = useRef(null);
  const containerRef = useRef(null);
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

  useEffect(() => {
    if (!imgRef.current) return;

    gsap.killTweensOf(imgRef.current);

    if (inView) {
      gsap.fromTo(
        imgRef.current,
        {
          y: 130,
          scale: 0.1,
          opacity: 0.5,
        },
        {
          y: -30,
          scale: 1,
          opacity: 1,
          duration: 4,
          ease: 'power4.out',
          onStart: () => {
            if (containerRef.current) {
              containerRef.current.style.overflow = 'visible';
            }
          },
        }
      );
    } else {
      gsap.to(imgRef.current, {
        y: 100,
        scale: 0.1,
        opacity: 0.5,
        duration: 1,
        ease: 'power3.inOut',
        onStart: () => {
          if (containerRef.current) {
            containerRef.current.style.overflow = 'hidden';
          }
        },
      });
    }
  }, [inView]);

  return (
    <div ref={containerRef} className={s.container}>
      <div ref={imgRef} className={s.imgWrapper}>
        <Image
          src="/image/steps-one.png"
          className={s.imgOne}
          alt="Step one"
          width={240}
          height={256}
          priority
        />
        <Image
          src="/image/steps-one-desktop.png"
          className={s.imgOneDesktop}
          alt="Step one"
          width={459}
          height={203}
          priority
        />
      </div>
    </div>
  );
}
