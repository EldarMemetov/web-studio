'use client';

import s from './StepsList.module.scss';
import StepsItem from '../StepsItem/StepsItem';

export default function StepsList({ items }) {
  return (
    <ul className={s.listContent}>
      {items.map((step) => (
        <StepsItem key={step.number} {...step} />
      ))}
    </ul>
  );
}
