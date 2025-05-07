import Image from 'next/image';
import Icon from '@/shared/Icon/Icon';
import s from './StepsFour.module.scss';
export default function StepFour() {
  return (
    <div>
      <Image
        src="/image/steps-four.png"
        alt="steps-three"
        width={240}
        height={264}
      />
      <Icon iconName="icon-search" width={75} height={86} className={s.icon} />
      <Icon
        iconName="icon-selected"
        width={76}
        height={80}
        className={s.icon}
      />
    </div>
  );
}
