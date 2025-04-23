import React from 'react';
import s from './Circles.module.scss';

const sizes = [
  { size: 142, delay: 3 },
  { size: 282, delay: 5.3 },
  { size: 442, delay: 7.2 },
  { size: 682, delay: 9.8 },
  { size: 962, delay: 11.4 },
];

const Circles = () => {
  return (
    <div className={s.circles}>
      {sizes.map(({ size, delay }, index) => (
        <div
          key={index}
          className={s.circle}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            animationDelay: `${delay}s`,
            zIndex: 5 - index,
          }}
        />
      ))}
    </div>
  );
};

export default Circles;
