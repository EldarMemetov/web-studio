'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import s from './StepsThree.module.scss';
import { WebText } from '../../GetFullText/WebText';

export default function StepsThree() {
  const fullText = WebText();
  const [printedText, setPrintedText] = useState('');
  const textContainerRef = useRef(null);
  const textInnerRef = useRef(null);
  const lastOverflowRef = useRef(0);

  useEffect(() => {
    let index = 0;
    let typingInterval;

    function startTyping() {
      typingInterval = setInterval(() => {
        const next = fullText.slice(0, index + 1);
        setPrintedText(next);
        index++;

        const container = textContainerRef.current;
        const inner = textInnerRef.current;
        if (container && inner) {
          const overflow = inner.scrollHeight - container.clientHeight;
          if (overflow !== lastOverflowRef.current) {
            lastOverflowRef.current = overflow;
            inner.style.transform =
              overflow > 0 ? `translateY(-${overflow}px)` : 'translateY(0)';
          }
        }

        if (index === fullText.length) {
          clearInterval(typingInterval);
          setTimeout(() => {
            index = 0;
            setPrintedText('');
            if (inner) {
              inner.style.transform = 'translateY(0)';
              lastOverflowRef.current = 0;
            }
            startTyping();
          }, 1500);
        }
      }, 60);
    }

    startTyping();
    return () => clearInterval(typingInterval);
  }, [fullText]);

  return (
    <div className={s.container}>
      <div className={s.imgWrapper}>
        <Image
          src="/image/steps-three.png"
          alt="steps-three"
          width={240}
          height={205}
        />
      </div>
      <div ref={textContainerRef} className={s.textContainer}>
        <div ref={textInnerRef} className={s.textWrapper}>
          <pre>{printedText}</pre>
        </div>
      </div>
    </div>
  );
}
