'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Icon from '@/shared/Icon/Icon';
import { gsap } from 'gsap';
import s from './StepsFour.module.scss';

export default function StepFour() {
  const imgRef = useRef(null);
  const containerRef = useRef(null);
  const iconRef = useRef(null);
  const selectedIconRef = useRef(null);

  const [inView, setInView] = useState(false);
  const [showSelected, setShowSelected] = useState(false);
  const tlRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    const el = containerRef.current;
    if (el) obs.observe(el);
    return () => el && obs.unobserve(el);
  }, []);

  useEffect(() => {
    if (!inView) return;

    const imgEl = imgRef.current;
    const searchIcon = iconRef.current;

    tlRef.current = gsap.timeline({ onComplete: () => setShowSelected(true) });

    tlRef.current.fromTo(
      imgEl,
      { y: 1 },
      { y: -60, duration: 7, ease: 'power1.inOut' }
    );

    if (searchIcon) {
      gsap.fromTo(
        searchIcon,
        { scale: 1 },
        {
          scale: 1.2,
          duration: 7,
          repeat: 1,
          yoyo: true,
          ease: 'power1.inOut',
        }
      );
    }

    return () => {
      tlRef.current?.kill();

      if (searchIcon) gsap.killTweensOf(searchIcon);
    };
  }, [inView]);

  useEffect(() => {
    if (!showSelected) return;
    const sel = selectedIconRef.current;
    gsap.fromTo(
      sel,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power1.out' }
    );
  }, [showSelected]);

  return (
    <div className={s.wrapper}>
      <div className={s.container} ref={containerRef}>
        <div ref={imgRef} className={s.imgWrapper}>
          <Image
            src="/image/steps-four.png"
            alt="steps-four"
            className={s.imgFour}
            width={240}
            height={264}
          />
          <Image
            src="/image/steps-four-desktop.png"
            alt="steps-four"
            className={s.imgFourDesktop}
            width={469}
            height={296}
          />
        </div>
      </div>

      {!showSelected && (
        <Icon
          iconName="icon-search"
          width={75}
          height={86}
          className={s.icon}
          ref={iconRef}
        />
      )}
      {showSelected && (
        <Icon
          iconName="icon-selected"
          width={76}
          height={80}
          className={s.icon}
          ref={selectedIconRef}
        />
      )}
    </div>
  );
}
