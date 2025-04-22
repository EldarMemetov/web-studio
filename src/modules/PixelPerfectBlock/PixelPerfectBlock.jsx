import { initServerI18n } from '@/i18n/utils/serverI18n';
import Container from '@/shared/container/Container';
import s from './PixelPerfectBlock.module.scss';

export default async function PixelPerfectBlock({ locale }) {
  const { t } = await initServerI18n(locale, ['pixelPerfectBlock']);

  return (
    <section className={s.sectionBlock}>
      <Container>
        <div className={s.perfectBlock}>
          <div className={s.gradientBlur} />
          <p className={s.description}>{t('part1')} </p>
          <p className={s.description}>
            {t('part2')} <span className={s.title}>{t('highlight2')}</span>
          </p>
          <p className={s.description}>
            <span className={s.title}>{t('highlight3')}</span> {t('part3')}
          </p>
          <p className={s.description}>
            {t('part4')} <span className={s.title}>{t('highlight4')}</span>{' '}
            {t('part41')}
          </p>
          <p className={s.description}>
            {t('part5')} <span className={s.title}>{t('highlight5')}</span>{' '}
            {t('part51')} <span className={s.title}>{t('highlight51')}</span>
          </p>
        </div>
      </Container>
    </section>
  );
}
// 'use client';
// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import s from './PixelPerfectBlock.module.scss';

// const fullText = `<!DOCTYPE html>
// <html>
//   <head>
//     <title>Virtual Terminal</title>
//   </head>
//   <body>
//     <h1>Welcome to the Future!</h1>
//     <p>Loading...</p>
//   </body>
// </html>`;

// export default function PixelPerfectBlock() {
//   const [printedText, setPrintedText] = useState('');

//   useEffect(() => {
//     let index = 0;
//     let typingInterval;

//     // Функция для автоматической печати текста
//     function startTyping() {
//       typingInterval = setInterval(() => {
//         setPrintedText(fullText.slice(0, index + 1));
//         index++;
//         if (index === fullText.length) {
//           clearInterval(typingInterval);
//           // Пауза, затем сброс и повторение анимации
//           setTimeout(() => {
//             index = 0;
//             setPrintedText('');
//             startTyping();
//           }, 1500); // пауза 1.5 сек после завершения печати
//         }
//       }, 50); // интервал 50 мс между символами
//     }

//     startTyping();

//     return () => clearInterval(typingInterval);
//   }, []);

//   return (
//     <div className={s.imageWrapper}>
//       <Image
//         src="/image/1.png"
//         alt="monitor"
//         width={350}
//         height={350}
//         className={s.monitorImg}
//       />
//       <div className={s.codeText}>
//         <pre>{printedText}</pre>
//       </div>
//     </div>
//   );
// }
