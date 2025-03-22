import React from "react";
import ReviewItem from "../ReviewItem/ReviewItem";
import s from "./ReviewsList.module.scss";
import InfiniteScroll from "../../../../shared/InfiniteScroll/InfiniteScroll";

export default function ReviewsList({ reviews }) {
  if (!reviews?.length) return <p>Відгуків немає</p>;

  return (
    <InfiniteScroll speed={40} gradient={false} direction="left">
      <ul className={s.ListReview}>
        {reviews.map((review) => (
          <ReviewItem key={review._id} review={review} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}
