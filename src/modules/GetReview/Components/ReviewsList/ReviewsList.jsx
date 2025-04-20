'use client';
import React, { useState } from 'react';
import ReviewItem from '../ReviewItem/ReviewItem';
import s from './ReviewsList.module.scss';
import InfiniteScroll from '../../../../shared/InfiniteScroll/InfiniteScroll';
import { useReviews } from '../ReviewsSection/ReviewsSection';
import ReviewsFormModal from '@/modules/ReviewsForm/ReviewsFormModal/ReviewsFormModal';
import Icon from '@/shared/Icon/Icon';
import Container from '@/shared/container/Container';
import { useTranslation } from 'react-i18next';

export default function ReviewsList() {
  const { t } = useTranslation('reviewsList');
  const { reviews } = useReviews();
  const [isModalOpen, setModalOpen] = useState(false);
  if (!reviews?.length) return <p>{t('noReviews')}</p>;

  return (
    <div>
      <InfiniteScroll speed={40} gradient={false} direction="left">
        <ul className={s.ListReview}>
          {reviews.map((review) => (
            <ReviewItem key={review._id} review={review} />
          ))}
        </ul>
      </InfiniteScroll>
      <Container>
        <div>
          <button onClick={() => setModalOpen(true)} className={s.button}>
            {t('addReview')}
            <Icon iconName="icon-arrow" className={s.icon} />
          </button>
        </div>
      </Container>
      <ReviewsFormModal
        show={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
