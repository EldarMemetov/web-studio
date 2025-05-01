import Icon from '@/shared/Icon/Icon';
import ButtonArrow from '@/shared/components/ButtonArrow/ButtonArrow';
import LaptopWrite from '../LaptopWrite/LaptopWrite';
import IdeasCamera from '../IdeasCamera/IdeasCamera';
import styles from './IdeasItem.module.scss';
import clsx from 'clsx';

export default function IdeasItem({ title, description, icon, list, cta }) {
  const ContentIcon = (() => {
    if (icon === 'LaptopWrite') return <LaptopWrite />;
    if (icon === 'icon-cinema') return <IdeasCamera />;
    return <Icon iconName={icon} className={styles.icon} />;
  })();

  const listClassName = clsx(styles.features, {
    [styles.featuresWeb]: icon === 'LaptopWrite',
    [styles.featuresVideo]: icon === 'icon-cinema',
  });

  return (
    <li className={styles.item} data-aos="fade-up">
      <div className={styles.containerContent}>
        <div className={styles.header} data-aos="zoom-in">
          {ContentIcon}
        </div>
        <h3 className={styles.title} data-aos="fade-up" data-aos-delay="200">
          {title}
        </h3>
        <p
          className={styles.description}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {description}
        </p>

        <ul className={listClassName}>
          {list.map((el, i) => {
            const itemClassName = clsx(styles.featureItem, {
              [styles.featureItemWeb]: icon === 'LaptopWrite',
              [styles.featureItemVideo]: icon === 'icon-cinema',
            });

            return (
              <li
                key={i}
                className={itemClassName}
                data-aos="fade-up"
                data-aos-delay={400 + i * 100}
              >
                <p className={styles.listItem}>{el}</p>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        className={styles.ContainerClick}
        data-aos="fade-up"
        data-aos-delay="800"
      >
        <p className={styles.cta}>{cta}</p>
        <ButtonArrow />
      </div>
    </li>
  );
}
