import Container from '@/shared/container/Container';
import s from './FetchServices.module.scss';
import Icon from '@/shared/Icon/Icon';
import LoadingBar from '@/shared/components/LoadingBar/LoadingBar';
import LinkButton from '@/shared/components/LinkButton/LinkButton';
import { ROUTES } from '@/shared/constants';

const FetchServices = () => {
  return (
    <section className={s.sectionBar}>
      <Container>
        <div className={s.ContainerContent}>
          <ul className={s.ListContainer}>
            <li className={s.itemList}>
              <LinkButton path={`/web-development`} className={s.linkItem}>
                <div className={s.socialLink}>
                  <Icon iconName="icon-mobile" className={s.icon} />
                </div>
                <h2 className={s.title}>Mobile apps</h2>
                <p className={s.description}>IOS & Android</p>
              </LinkButton>
            </li>
            <li className={s.itemList}>
              <LinkButton path={`/web-development`} className={s.linkItem}>
                <div className={s.socialLink}>
                  <Icon iconName="icon-web" className={s.icon} />
                </div>
                <h2 className={s.title}>Web Platforms</h2>
                <p className={s.description}>Sites & Web Apps</p>
              </LinkButton>
            </li>
            <li className={s.itemList}>
              <LinkButton path={`/videography`} className={s.linkItem}>
                <div className={s.socialLink}>
                  <Icon iconName="icon-video" className={s.icon} />
                </div>
                <h2 className={s.title}>Video Production</h2>
                <p className={s.description}>Ads & Promo Videos</p>
              </LinkButton>
            </li>
          </ul>
          <LoadingBar />
        </div>
      </Container>
    </section>
  );
};

export default FetchServices;
