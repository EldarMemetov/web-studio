import IdeasItem from '../IdeasItem/IdeasItem';
import s from './IdeasList.module.scss';

export default function IdeasList({ items }) {
  return (
    <ul className={s.containerList}>
      {items.map((item, index) => (
        <IdeasItem
          key={index}
          title={item.title}
          description={item.description}
          info={item.info}
        />
      ))}
    </ul>
  );
}
