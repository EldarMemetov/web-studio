import Icon from '@/shared/Icon/Icon';
import styles from './Item.module.scss';

export default function Item({ title, description, iconName }) {
  return (
    <li className={styles.itemList} data-aos="fade-up">
      <div className={styles.mainContent}>
        <Icon
          iconName={iconName}
          className={styles.game}
          data-aos="zoom-in"
          data-aos-delay="100"
        />
        <h3 className={styles.title} data-aos="fade-up" data-aos-delay="200">
          {title}
        </h3>
      </div>
      <div className={styles.containerOn}>
        <p
          className={styles.description}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {description}
        </p>
      </div>
    </li>
  );
}
