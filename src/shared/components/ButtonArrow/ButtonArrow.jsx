import Link from 'next/link';
import Icon from '@/shared/Icon/Icon';
import styles from './ButtonArrow.module.scss';

const ButtonArrow = ({ href, onClick, className = '' }) => {
  const classes = `${styles.button} ${className}`;
  if (href) {
    return (
      <Link href={href} className={classes}>
        <Icon iconName="icon-arrow" className={styles.arrow} />
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      <Icon iconName="icon-arrow" className={styles.arrow} />
    </button>
  );
};

export default ButtonArrow;
