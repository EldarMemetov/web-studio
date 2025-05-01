import styles from './ItemBrand.module.scss';
import Icon from '@/shared/Icon/Icon';

export default function ItemBrand({ title, description, iconName }) {
  return (
    <li className={styles.ContainerItem} data-aos="fade-up">
      <Icon
        iconName={iconName}
        className={styles.iconStyle}
        width={160}
        height={103}
        data-aos="zoom-in"
        data-aos-delay="100"
      />
      <h3
        className={styles.titleInformation}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {title}
      </h3>
      <p className={styles.description} data-aos="fade-up" data-aos-delay="300">
        {description}
      </p>
    </li>
  );
}
