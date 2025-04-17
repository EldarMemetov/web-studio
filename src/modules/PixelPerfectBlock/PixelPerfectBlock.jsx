import { initServerI18n } from '@/i18n/utils/serverI18n';
import Container from '@/shared/container/Container';
import s from './PixelPerfectBlock.module.scss';

export default async function PixelPerfectBlock({ locale }) {
  const { t } = await initServerI18n(locale, ['pixelPerfectBlock']);

  return (
    <section className={s.sectionBlock}>
      <Container>
        <div className="pixel-perfect-block">
          <p className={s.description}>
            {t('description.part7')}{' '}
            <span className={s.title}>{t('description.highlight6')}</span>
            {t('description.part8')}{' '}
            <span className={s.title}>{t('description.highlight7')}</span>{' '}
            {t('description.part9')}{' '}
            <span className={s.title}>{t('description.highlight8')}</span>
            {t('description.part10')}{' '}
            <span className={s.title}>{t('description.highlight9')}</span>{' '}
            {t('description.part11')}{' '}
            <span className={s.title}>{t('description.highlight10')}</span>{' '}
            {t('description.part12')}{' '}
            <span className={s.title}>{t('description.highlight11')}</span>
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
