'use client';

import React from 'react';
import Image from 'next/image';

import Modal from '@/shared/Modal/Modal';

import s from './ModalFeedback.module.scss';
import { useTranslation } from 'react-i18next';

export default function ModalFeedback({ show, onClose }) {
  const { t } = useTranslation('modalFeedback');

  return (
    <Modal show={show} onClose={onClose} contentClassName={s.myCustomModal}>
      <div className={s.containerContent}>
        <Image
          src="/image/rocket-man.png"
          alt="rocket-man"
          width={563}
          height={586}
          className={s.rocketMan}
        />
        <h2 className={s.title}>{t('title')}</h2>
        <h3 className={s.titleNext}>{t('subtitle')}</h3>
      </div>
    </Modal>
  );
}
