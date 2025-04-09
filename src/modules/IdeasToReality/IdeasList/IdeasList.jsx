// import IdeasItem from '../IdeasItem/IdeasItem';
// import s from './IdeasList.module.scss';
// export default function IdeasList({ items }) {
//   return (
//     <div>
//       <ul className={s.containerList}>
//         {items.map((item, index) => (
//           <IdeasItem
//             key={index}
//             title={item.title}
//             description={item.description}
//             info={item.info}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// }

'use client';

import { useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import IdeasItem from '../IdeasItem/IdeasItem';
import s from './IdeasList.module.scss';
import Icon from '@/shared/Icon/Icon';

export default function IdeasList({ items }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (!current) return;

    const scrollAmount = 420;
    current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => scroll('right'),
    onSwipedRight: () => scroll('left'),
    trackMouse: true,
  });

  return (
    <div className={s.wrapper}>
      <div {...handlers} className={s.scrollWrapper} ref={scrollRef}>
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
      </div>

      <div className={s.arrows}>
        <button
          onClick={() => scroll('left')}
          aria-label="Scroll left"
          className={s.buttonSlid}
        >
          <Icon iconName="icon-left" className={s.iconLeft} />
        </button>
        <button
          onClick={() => scroll('right')}
          aria-label="Scroll right"
          className={s.buttonSlid}
        >
          <Icon iconName="icon-right" className={s.iconRight} />
        </button>
      </div>
    </div>
  );
}
