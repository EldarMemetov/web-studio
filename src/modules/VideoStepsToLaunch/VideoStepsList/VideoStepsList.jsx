import s from './VideoStepsList.module.scss';
import StepsItem from '../VideoStepsItem/VideoStepsItem';

export default function VideoStepsList({ items }) {
  return (
    <ul className={s.listContent}>
      {items.map((step, index) => (
        <StepsItem key={step.number} {...step} index={index} />
      ))}
    </ul>
  );
}
