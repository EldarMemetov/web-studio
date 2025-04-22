'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/shared/components/button/Button';
import Modal from '@/shared/Modal/Modal';
import { useRouter } from 'next/navigation';
import s from './ModalFeedback.module.scss';
import { useTranslation } from 'react-i18next';

export default function ModalFeedback({ show, onClose }) {
  const router = useRouter();
  const { t } = useTranslation('modalFeedback');
  const handleClick = () => {
    onClose();
    router.push('/');
  };

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
        <Button variant="variant3" onClick={handleClick}>
          {t('button')}
        </Button>
      </div>
    </Modal>
  );
}
