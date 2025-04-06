'use client';

import Link from 'next/link';

import s from './not-found.module.scss';

export default function NotFound() {
  return (
    <section>
      <div className={s.container}>
        <h2 className={s.title}>notFoundTitle</h2>
        <p className={s.message}>notFoundMessage</p>
        <Link href="/" className={s.link}>
          backToHome
        </Link>
      </div>
    </section>
  );
}
