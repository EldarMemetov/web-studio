import Icon from '@/shared/Icon/Icon';
import styles from './Item.module.scss';
import ButtonArrow from '@/shared/components/ButtonArrow/ButtonArrow';

export default function Item({ title, description, iconName }) {
  return (
    <li className={styles.itemList}>
      <div className={styles.mainContent}>
        <Icon iconName={iconName} className={styles.game} />
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div className={styles.containerOn}>
        <p className={styles.description}>{description}</p>
        <ButtonArrow />
      </div>
    </li>
  );
}
