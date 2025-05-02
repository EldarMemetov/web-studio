import Link from 'next/link';
import Icon from '@/shared/Icon/Icon';
import styles from './ButtonArrow.module.scss';

const ButtonArrow = ({ href, onClick }) => {
  if (href) {
    return (
      <Link href={href} className={styles.button}>
        <Icon iconName="icon-arrow" className={styles.arrow} />
      </Link>
    );
  }

  return (
    <button className={styles.button} onClick={onClick}>
      <Icon iconName="icon-arrow" className={styles.arrow} />
    </button>
  );
};

export default ButtonArrow;
