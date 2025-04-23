import { initServerI18n } from '@/i18n/utils/serverI18n';
import Container from '@/shared/container/Container';
import s from './PixelPerfectBlock.module.scss';

export default async function PixelPerfectBlock({ locale }) {
  const { t } = await initServerI18n(locale, ['pixelPerfectBlock']);

  return (
    <section className={s.sectionBlock}>
      <Container>
        <div className={s.perfectBlock}>
          <div className={s.gradientBlur} />
          <p className={s.description}>{t('part1')} </p>
          <p className={s.description}>
            {t('part2')} <span className={s.title}>{t('highlight2')}</span>
          </p>
          <p className={s.description}>
            <span className={s.title}>{t('highlight3')}</span> {t('part3')}
          </p>
          <p className={s.description}>
            {t('part4')} <span className={s.title}>{t('highlight4')}</span>{' '}
            {t('part41')}
          </p>
          <p className={s.description}>
            {t('part5')} <span className={s.title}>{t('highlight5')}</span>{' '}
            {t('part51')} <span className={s.title}>{t('highlight51')}</span>
          </p>
        </div>
      </Container>
    </section>
  );
}
