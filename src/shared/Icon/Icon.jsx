import clsx from 'clsx';
import s from './Icon.module.scss';

const Icon = ({ iconName, className, ...props }) => {
  const iconClass = clsx(s['icon'], className && className);
  return (
    <svg className={iconClass} {...props}>
      <use href={`/icons/sprite.svg#${iconName}`}></use>
    </svg>
  );
};

export default Icon;

// import React from 'react';
// import clsx from 'clsx';
// import s from './Icon.module.scss';
// export default function Icon({
//   iconName,
//   mode = 'inline',
//   className,
//   ...props
// }) {
//   const iconClass = clsx(s.icon, className);
//   // выбираем, как формировать href
//   const href =
//     mode === 'external' ? `/icons/sprite.svg#${iconName}` : `#${iconName}`;

//   return (
//     <svg className={iconClass} {...props} aria-hidden="true">
//       <use href={href} />
//     </svg>
//   );
// }
