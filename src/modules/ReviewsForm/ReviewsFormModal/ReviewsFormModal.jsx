'use client';
import s from './ReviewsFormModal.module.scss';
import Modal from '@/shared/Modal/Modal';
import ReviewsFormContent from '../ReviewsForm';

export default function ReviewsFormModal({ show, onClose }) {
  return (
    <Modal show={show} onClose={onClose} contentClassName={s.myCustomModal}>
      <ReviewsFormContent onSuccess={onClose} />
    </Modal>
  );
}
