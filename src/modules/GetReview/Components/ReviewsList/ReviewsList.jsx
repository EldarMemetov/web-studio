import React from "react";
import ReviewItem from "../ReviewItem/ReviewItem";

export default function ReviewsList({ reviews }) {
  if (!reviews?.length) return <p>Відгуків немає</p>;

  return (
    <ul>
      {reviews.map((review) => (
        <ReviewItem key={review._id} review={review} />
      ))}
    </ul>
  );
}
