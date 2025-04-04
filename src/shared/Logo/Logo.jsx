import Image from 'next/image';
import s from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={s.logoContainer}>
      <Image
        src="/image/logo.png"
        alt="logo"
        width={70}
        height={30}
        className={s.logo}
      />
    </div>
  );
};

export default Logo;
