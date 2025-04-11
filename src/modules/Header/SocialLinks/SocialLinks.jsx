import Container from '@/shared/container/Container';
import Icon from '../../../shared/Icon/Icon';
import s from './SocialLinks.module.scss';
export const SocialLinks = () => {
  return (
    <Container>
      <div className={s.contentContainer}>
        <ul className={s.list}>
          <li className={s.socialLinkList}>
            <a
              href="https://www.instagram.com/"
              className={s.socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon iconName="icon-instagram" className={s.iconInstagram} />
            </a>
          </li>
          <li className={s.socialLinkList}>
            <a
              href="https://www.youtube.com/"
              className={s.socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon iconName="icon-youtube" className={s.socialsIcon} />
            </a>
          </li>
          <li className={s.socialLinkList}>
            <a
              href=""
              className={s.socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon iconName="icon-telegram" className={s.socialsIcon} />
            </a>
          </li>
          <li className={s.socialLinkList}>
            <a
              href=""
              className={s.socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon iconName="icon-whatsapp" className={s.socialsIcon} />
            </a>
          </li>
          <li className={s.socialLinkList}>
            <a
              href=""
              className={s.socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon iconName="icon-linkedin" className={s.socialsIcon} />
            </a>
          </li>
        </ul>
      </div>
    </Container>
  );
};
