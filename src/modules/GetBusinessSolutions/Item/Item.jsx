import Icon from '@/shared/Icon/Icon';
import styles from './Item.module.scss';

export default function Item({ title, description }) {
  return (
    <li className={styles.itemList}>
      <div className={styles.mainContent}>
        <Icon iconName="icon-game" className={styles.game} />
        <h3 className={styles.title}>{title}</h3>
      </div>
      <p className={styles.description}>{description}</p>
    </li>
  );
}
