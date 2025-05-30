import Link from 'next/link';
import { clsx } from 'clsx';
import { LINKDATA } from '@/shared/constants';
import s from './LinkButton.module.scss';

const LinkButton = ({
  path,
  linkText,
  children,
  type,
  className,
  ...props
}) => {
  let linkStyle = '';
  let icon = null;

  switch (type) {
    case LINKDATA.TYPE_LIGHT_BORDER:
      linkStyle = s.border;
      break;
    case LINKDATA.TYPE_DARK_HEART:
      linkStyle = s.backGroundHeart;
      icon = (
        <svg className={s.icon} aria-hidden="true" focusable="false">
          <use href="/icons/sprite.svg#icon-heart"></use>
        </svg>
      );
      break;
    case LINKDATA.TYPE_LIGHT_BORDER_BF:
      linkStyle = s.borderBiggerFont;
      break;
    case LINKDATA.TYPE_DARK_BF:
      linkStyle = s.backGroundBiggerFont;
      break;
  }

  return (
    <Link
      href={path}
      className={clsx(s.defaultLink, linkStyle, className)}
      {...props}
    >
      {icon && <span className={s.iconWrapper}>{icon}</span>}
      {children || linkText}
    </Link>
  );
};

export default LinkButton;
