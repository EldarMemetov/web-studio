import Image from 'next/image';
import Link from 'next/link';
import s from './Logo.module.scss';

const Logo = () => {
  return (
    <Link href="/" className={s.logoContainer}>
      <Image
        src="/image/logo.png"
        alt="logo"
        width={40}
        height={40}
        className={s.logo}
      />
      <h2>QVRIX</h2>
    </Link>
  );
};

export default Logo;
