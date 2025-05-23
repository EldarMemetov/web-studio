import Container from '@/shared/container/Container';
import Image from 'next/image';
import { initServerI18n } from '@/i18n/utils/serverI18n';
import s from './WebPortfolio.module.scss';
import Link from 'next/link';
import Button from '@/shared/components/button/Button';
import ScrollButton from '@/shared/ScrollButton/ScrollButton';
export default async function PortfolioPage({ locale }) {
  const { t } = await initServerI18n(locale, ['webPortfolio']);
  const projects = t('projects', { returnObjects: true }) || {};

  return (
    <section className={s.section} id="portfolioSection">
      <div className={s.background}></div>
      <Container>
        <h2 className={s.title}>
          {t('title.prefix')}{' '}
          <span className={s.SpanTitle}>{t('title.span')}</span>
        </h2>
        <p className={s.descriptions}>
          {t('desc.part1')}{' '}
          <span className={s.SpanDescriptions}>{t('desc.span1')}</span>
          <span>{t('desc.span2')}</span>
        </p>

        <div className={s.portfolioContainer}>
          {Object.entries(projects).map(([id, project]) => (
            <div key={id} className={s.portfolioItem}>
              <div className={s.imageWrapper}>
                <Image
                  src={project.image1}
                  alt={project.title}
                  className={s[project.image1.className]}
                />

                <div className={s.overlay}>
                  <Link
                    href={`/${locale}/web-development/${id}`}
                    legacyBehavior
                  >
                    <Button variant="variant10" as="a">
                      {t('buttons')}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
          <ScrollButton variant="variant11" targetId="feedback-form">
            {t('buttonsGo')}
          </ScrollButton>
        </div>
      </Container>
    </section>
  );
}
