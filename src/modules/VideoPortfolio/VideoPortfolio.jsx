'use client';
import { useState } from 'react';
import Container from '@/shared/container/Container';
import ScrollButton from '@/shared/ScrollButton/ScrollButton';
import s from './VideoPortfolio.module.scss';
import Image from 'next/image';
import clsx from 'clsx';

const videos = [
  {
    thumbnail: '/image/codding.jpg',
    videoUrl: 'https://player.vimeo.com/video/1083567829?h=b97c7e28d6',
  },
  {
    thumbnail: '/image/codding.jpg',
    videoUrl: 'https://player.vimeo.com/video/1083567829?h=b97c7e28d6',
  },
  {
    thumbnail: '/image/codding.jpg',
    videoUrl: 'https://player.vimeo.com/video/1083567829?h=b97c7e28d6',
  },
  {
    thumbnail: '/image/codding.jpg',
    videoUrl: 'https://player.vimeo.com/video/1083567829?h=b97c7e28d6',
  },
  {
    thumbnail: '/image/codding.jpg',
    videoUrl: 'https://player.vimeo.com/video/1083567829?h=b97c7e28d6',
  },
];

export default function VideoPortfolio() {
  const [modalVideo, setModalVideo] = useState(null);

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
              <span className={s.spanDescription}>ціль</span>— щоб кожен кадр
              працював на вас.
            </p>
          </div>
          <div>
            <ul className={s.videoList}>
              {videos.map(({ thumbnail, videoUrl }, idx) => (
                <li
                  key={idx}
                  className={clsx(s.videoItem, idx === 2 && s.videoItemThird)}
                  onClick={() => setModalVideo(videoUrl)}
                >
                  <Image
                    src={thumbnail}
                    alt={`Video thumbnail ${idx + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className={s.image}
                  />
                  <div className={s.playButton}>
                    <Image
                      src="/image/play.png"
                      alt="Play icon"
                      width={100}
                      height={100}
                      className={s.play}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className={s.containerButton}>
            <ScrollButton variant="variant11" targetId="feedback-form">
              Цікавлять інші проєкти? Напишіть нам
            </ScrollButton>
          </div>
        </div>
      </Container>

      {modalVideo && (
        <div className={s.modalOverlay} onClick={() => setModalVideo(null)}>
          <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
            <iframe
              src={modalVideo}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
