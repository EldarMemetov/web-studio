'use client';
import { useState } from 'react';
import ToggleItem from '../ToggleItem/ToggleItem';
import styles from './ToggleList.module.scss';

export default function ToggleList({ items }) {
  const [openIndexes, setOpenIndexes] = useState({});

  const toggleOpen = (index) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <ul className={styles.containerList}>
      {items.map((item, index) => (
        <ToggleItem
          key={index}
          index={index}
          title={item.question}
          description={item.answer}
          isOpen={openIndexes[index]}
          toggleOpen={toggleOpen}
        />
      ))}
    </ul>
  );
}
