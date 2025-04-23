import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import confetti from 'canvas-confetti';
import Button from '@/shared/components/button/Button';
import s from './SuccessContent.module.scss';
import Image from 'next/image';

export default function SuccessContent({ onClose }) {
  const router = useRouter();
  const { t } = useTranslation('successContent');
  const rocketRef = useRef(null);
  const canvasRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      rocketRef.current,
      { y: 100, opacity: 0, rotation: -10 },
      { y: 0, opacity: 1, rotation: 0, duration: 1.2, ease: 'bounce.out' }
    )

      .fromTo(
        titleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
        '-=0.4'
      )
      .fromTo(
        subtitleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
        '-=0.3'
      )

      .fromTo(
        buttonRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' },
        '-=0.3'
      )

      .add(() => {
        const myCanvas = canvasRef.current;
        myCanvas.width = window.innerWidth;
        myCanvas.height = window.innerHeight;
        const myConfetti = confetti.create(myCanvas, { resize: true });

        myConfetti({
          particleCount: 150,
          spread: 80,
          origin: { x: 0.5, y: 0.3 },
        });

        gsap.to(
          {},
          {
            repeat: 3,
            repeatDelay: 0.5,
            onRepeat: () =>
              myConfetti({
                particleCount: 80,
                spread: 100,
                origin: { x: Math.random(), y: Math.random() * 0.5 },
              }),
          }
        );
      });
  }, []);

  const handleClick = () => {
    onClose();
    router.push('/');
  };

  return (
    <div className={s.containerContent}>
      <canvas ref={canvasRef} className={s.confettiCanvas} />
      <div ref={rocketRef} className={s.iconWrapper}>
        <Image
          src="/image/rocket-yes.png"
          alt="rocket-yes"
          width={563}
          height={586}
          className={s.image}
        />
      </div>

      <h2 ref={titleRef} className={s.title}>
        {t('reviewAcceptedTitle')}
      </h2>
      <h3 ref={subtitleRef} className={s.subtitle}>
        {t('reviewAcceptedSubtitle')}
      </h3>

      <Button
        ref={buttonRef}
        className={s.button}
        variant="variant3"
        onClick={handleClick}
      >
        {t('backToHome')}
      </Button>
    </div>
  );
}
