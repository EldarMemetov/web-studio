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
    const tl = gsap.timeline({
      defaults: { ease: 'power4.out' },
    });

    if (inView) {
      tl.fromTo(
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
          duration: 10,
          onStart: () => {
            if (containerRef.current) {
              containerRef.current.style.overflow = 'visible';
            }
          },
        }
      );
    } else {
      tl.to(imgRef.current, {
        y: 100,
        scale: 0.1,
        opacity: 0.5,
        duration: 7,
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
          alt="Step one"
          width={240}
          height={256}
          priority
        />
      </div>
    </div>
  );
}
