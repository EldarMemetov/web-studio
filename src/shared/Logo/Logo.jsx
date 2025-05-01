import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import s from './Logo.module.scss';

const Logo = ({ variant = 'header' }) => {
  return (
    <Link href="/" className={clsx(s.logoContainer, s[variant])}>
      <Image
        src="/image/logo.png"
        alt="logo"
        width={40}
        height={40}
        className={s.logo}
        priority
      />
      <h2 className={s.logoText}>QVRIX</h2>
    </Link>
  );
};

export default Logo;
