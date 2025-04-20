import Icon from '@/shared/Icon/Icon';
import styles from './ButtonArrow.module.scss';
const ButtonArrow = () => {
  return (
    <button className={styles.button}>
      <Icon iconName="icon-arrow" className={styles.arrow} />
    </button>
  );
};

export default ButtonArrow;
