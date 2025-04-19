'use client';
import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import styles from './Modal.module.scss';
import Icon from '../Icon/Icon';

export default function Modal({
  show,
  onClose,
  children,
  className = '',
  contentClassName = '',
}) {
  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog
        as="div"
        className={`${styles.overlay} ${className}`}
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter={styles.enter}
          enterFrom={styles.enterFrom}
          enterTo={styles.enterTo}
          leave={styles.leave}
          leaveFrom={styles.leaveFrom}
          leaveTo={styles.leaveTo}
        >
          <div className={styles.background} />
        </Transition.Child>

        <Dialog.Panel className={`${styles.modal} ${contentClassName}`}>
          <button className={styles.closeButton} onClick={onClose}>
            <Icon
              iconName="icon-close"
              width={12}
              height={12}
              className={styles.icon}
            />
          </button>
          {children}
        </Dialog.Panel>
      </Dialog>
    </Transition.Root>
  );
}
