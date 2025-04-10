'use client';
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import styles from './RocketAnimation.module.scss';

const RocketAnimation = ({ isHovered, onAnimationEnd, isFormSubmitted }) => {
  const rocketRef = useRef(null);
  const smokeRef = useRef(null);

  useEffect(() => {
    if (isHovered) {
      const tl = gsap.timeline();

      tl.to(rocketRef.current, {
        y: -20,
        duration: 0.3,
        ease: 'power1.out',
      }).to(rocketRef.current, {
        y: 0,
        duration: 0.3,
        ease: 'power1.inOut',
      });

      tl.to(
        smokeRef.current,
        {
          opacity: 0.3,
          duration: 0.2,
          ease: 'power1.inOut',
        },
        0
      ).to(
        smokeRef.current,
        {
          opacity: 0,
          duration: 0.4,
          ease: 'power1.out',
        },
        '+=0.2'
      );
    }
  }, [isHovered]);

  useEffect(() => {
    if (isFormSubmitted) {
      const tl = gsap.timeline();

      tl.to(rocketRef.current, {
        y: -70,
        duration: 0.3,
        ease: 'power1.out',
      }).to(rocketRef.current, {
        y: 0,
        duration: 0.3,
        ease: 'power1.inOut',
      });

      // Дым
      tl.to(
        smokeRef.current,
        {
          opacity: 0.6,
          duration: 0.3,
          ease: 'power1.inOut',
        },
        '<'
      );

      tl.to(rocketRef.current, {
        opacity: 0,
        duration: 1.2,
        ease: 'power2.in',
      });

      tl.to(
        smokeRef.current,
        {
          opacity: 0,
          duration: 0.4,
          ease: 'power1.out',
        },
        '-=0.8'
      );

      tl.add(() => {
        onAnimationEnd();
      });
    }
  }, [isFormSubmitted, onAnimationEnd]);

  return (
    <div className={styles.rocketWrapper}>
      <div ref={rocketRef}>
        <Image
          src="/image/feedback.png"
          alt="feedback"
          width={568}
          height={390}
          className={styles.feedback}
        />
      </div>
      <div className={styles.smoke} ref={smokeRef}></div>
    </div>
  );
};

export default RocketAnimation;
