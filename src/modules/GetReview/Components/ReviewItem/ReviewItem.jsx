import Icon from '@/shared/Icon/Icon';
import s from './ReviewItem.module.scss';

export default function ReviewItem({ review }) {
  const { name, text, email, rating = 0 } = review;

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const isActive = i <= rating; // Если звезда активна, то заливка
      stars.push(
        <Icon
          key={i}
          iconName={isActive ? 'icon-star-filled' : 'icon-star-outline'} // В зависимости от активности, выбираем иконку
          className={`${s.star} ${isActive ? s.filled : s.outline}`} // Применяем нужный стиль
        />
      );
    }
    return stars;
  };

  return (
    <li className={s.listItem}>
      <p className={s.review}>{text}</p>
      <div>
        <div>
          <h2 className={s.name}>{name}</h2>
          <p className={s.email}>{email}</p>
        </div>
        <div className={s.stars}>{renderStars()}</div>
      </div>
    </li>
  );
}
