import Icon from '@/shared/Icon/Icon';
import s from './IdeasCamera.module.scss';

export default function IdeasCamera() {
  return (
    <div className={s.iconWrapper}>
      <Icon iconName="icon-cinema" className={s.icon} />
      <Icon iconName="icon-cinema-next" className={s.iconNext} />
    </div>
  );
}
