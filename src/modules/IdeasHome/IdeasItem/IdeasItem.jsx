import Icon from '@/shared/Icon/Icon';
import ButtonArrow from '@/shared/components/ButtonArrow/ButtonArrow';
import LaptopWrite from '../LaptopWrite/LaptopWrite';
import IdeasCamera from '../IdeasCamera/IdeasCamera';
import styles from './IdeasItem.module.scss';

export default function IdeasItem({ title, description, icon, list, cta }) {
  let ContentIcon = null;

  if (icon === 'LaptopWrite') {
    ContentIcon = <LaptopWrite />;
  } else if (icon === 'icon-cinema') {
    ContentIcon = <IdeasCamera />;
  } else {
    ContentIcon = <Icon iconName={icon} className={styles.icon} />;
  }

  return (
    <li className={styles.item}>
      <div className={styles.header}>{ContentIcon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.features}>
        {list.map((el, i) => (
          <li key={i} className={styles.featureItem}>
            <p className={styles.listItem}>{el}</p>
          </li>
        ))}
      </ul>
      <div className={styles.ContainerClick}>
        <p className={styles.cta}>{cta}</p>
        <ButtonArrow />
      </div>
    </li>
  );
}
