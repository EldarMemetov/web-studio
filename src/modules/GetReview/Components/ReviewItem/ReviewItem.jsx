import s from "./ReviewItem.module.scss";
export default function ReviewItem({ review }) {
  return (
    <li className={s.listItem}>
      <h2 className={s.name}>{review.name}</h2>
      <p className={s.review}>{review.text}</p>
    </li>
  );
}
