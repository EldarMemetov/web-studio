import Icon from '@/shared/Icon/Icon';
import s from './IdeasItem.module.scss';

export default function IdeasItem({ title, description, info }) {
  return (
    <li className={s.itemList}>
      <div className={s.card}>
        <div className={s.cardContent}>
          <Icon iconName="icon-ideas" className={s.icon} />
          <h3 className={s.nameIdeas}>{title}</h3>
          <p className={s.descriptionIdeas}>{description}</p>
          <h4 className={s.infoIdeas}>{info}</h4>
        </div>
      </div>
      <button className={s.button}>
        <Icon iconName="icon-arrow" className={s.arrow} />
      </button>
    </li>
  );
}
