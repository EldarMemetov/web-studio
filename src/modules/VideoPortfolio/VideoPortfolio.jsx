'use client';
import { useState, useEffect, useRef } from 'react';
import Container from '@/shared/container/Container';
import ScrollButton from '@/shared/ScrollButton/ScrollButton';
import s from './VideoPortfolio.module.scss';
import clsx from 'clsx';
import Player from '@vimeo/player';

const videos = [
  {
    videoUrl: 'https://player.vimeo.com/video/1083567829?h=b97c7e28d6',
  },
  {
    videoUrl: 'https://player.vimeo.com/video/1083567829?h=b97c7e28d6',
  },
  {
    videoUrl: 'https://player.vimeo.com/video/1083567829?h=b97c7e28d6',
  },
  {
    videoUrl: 'https://player.vimeo.com/video/1083567829?h=b97c7e28d6',
  },
];

export default function VideoPortfolio() {
  const playerRefs = useRef([]);

  useEffect(() => {
    playerRefs.current = playerRefs.current.slice(0, videos.length);

    playerRefs.current.forEach((el, idx) => {
      if (el && !el.player) {
        el.player = new Player(el.iframe);
      }
    });
  }, []);

  const handleMouseEnter = (idx) => {
    const player = playerRefs.current[idx]?.player;
    player?.play().catch(() => {
      // Игнорируем ошибку прерывания
    });
  };

  const handleMouseLeave = (idx) => {
    const player = playerRefs.current[idx]?.player;
    player?.pause().catch(() => {
      // Игнорируем ошибку прерывания
    });
  };

  return (
    <section className={s.section}>
      <Container>
        <div className={s.containerContent}>
          <div className={s.containerText}>
            <h2 className={s.title}>
              Наші реалізовані <span className={s.spanTitle}>проєкти</span>
            </h2>
            <p className={s.description}>
              Продакшн, що поєднує{' '}
              <span className={s.spanDescription}>стиль, історію</span> та
              <span className={s.spanDescription}>ціль</span> — щоб кожен кадр
              працював на вас.
            </p>
          </div>
          <ul className={s.videoList}>
            {videos.map(({ videoUrl }, idx) => (
              <li
                key={idx}
                className={clsx(s.videoItem, idx === 2 && s.videoItemThird)}
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={() => handleMouseLeave(idx)}
              >
                <div className={s.videoWrapper}>
                  <iframe
                    ref={(el) => (playerRefs.current[idx] = { iframe: el })}
                    src={`${videoUrl}&background=1&controls=0&title=0&byline=0&portrait=0&autoplay=0&muted=1`}
                    allowFullScreen
                    frameBorder="0"
                    loading="lazy"
                  ></iframe>
                </div>
              </li>
            ))}
          </ul>
          <div className={s.containerButton}>
            <ScrollButton variant="variant11" targetId="feedback-form">
              Цікавлять інші проєкти? Напишіть нам
            </ScrollButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
