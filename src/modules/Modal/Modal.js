'use client';
import Image from 'next/image';
import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import styles from './Modal.module.scss';

export default function Modal({ show, onClose, children }) {
  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog as="div" className={styles.overlay} onClose={onClose}>
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

        <Dialog.Panel className={styles.modal}>
          <button className={styles.closeButton} onClick={onClose}>
            <Image src="/icons/close.svg" alt="Close" width={12} height={12} />
          </button>
          {children}
        </Dialog.Panel>
      </Dialog>
    </Transition.Root>
  );
}
