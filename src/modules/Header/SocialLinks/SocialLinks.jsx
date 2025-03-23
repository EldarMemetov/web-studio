import Icon from '../../../shared/Icon/Icon';
import s from './SocialLinks.module.scss';
export const SocialLinks = () => {
  return (
    <ul className={s.list}>
      <li>
        <a
          href="https://www.instagram.com/"
          className={s.socialLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon iconName="icon-instagram" className={s.socialsIcon} />
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/"
          className={s.socialLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon iconName="icon-youtube" className={s.socialsIcon} />
        </a>
      </li>
      <li>
        <a
          href=""
          className={s.socialLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon iconName="icon-telegram" className={s.socialsIcon} />
        </a>
      </li>
      <li>
        <a
          href=""
          className={s.socialLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon iconName="icon-whats-app" className={s.socialsIcon} />
        </a>
      </li>
    </ul>
  );
};
