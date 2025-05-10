import { ItemEffectiveSolution } from '../ItemEffectiveSolutions/ItemEffectiveSolutions';
import s from './ListEffectiveSolutions.module.scss';
export function ListEffectiveSolutions({ items }) {
  return (
    <ul className={s.ListContent}>
      {items.map((it, idx) => (
        <ItemEffectiveSolution key={idx} item={it} />
      ))}
    </ul>
  );
}
