export default function ReviewItem({ review }) {
  return (
    <li>
      <h2>{review.name}</h2>
      <p>{review.text}</p>
    </li>
  );
}
