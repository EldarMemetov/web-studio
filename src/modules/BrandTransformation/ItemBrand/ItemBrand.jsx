import styles from './ItemBrand.module.scss';
import Icon from '@/shared/Icon/Icon';
export default function ItemBrand({ title, description, iconName }) {
  return (
    <li className={styles.ContainerItem}>
      <div className={styles.containerIcon}>
        <h3 className={styles.titleInformation}>{title}</h3>
        <Icon iconName="icon-game" className={styles.game} />
      </div>
      <p className={styles.description}>{description}</p>
      <Icon
        iconName={iconName}
        className={styles.iconStyle}
        width={160}
        height={103}
      />
    </li>
  );
}
