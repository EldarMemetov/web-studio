"use client";

import React, { useState } from "react";
import ReviewsForm from "../../../ReviewsForm/ReviewsForm";
import ReviewsList from "../ReviewsList/ReviewsList";

export default function ReviewsSection({ initialReviews }) {
  const [reviews, setReviews] = useState(initialReviews);

  const addReview = (newReview) => {
    setReviews((prevReviews) => [newReview, ...prevReviews]);
  };

  return (
    <>
      <ReviewsForm onAddReview={addReview} />
      <ReviewsList reviews={reviews} />
    </>
  );
}
