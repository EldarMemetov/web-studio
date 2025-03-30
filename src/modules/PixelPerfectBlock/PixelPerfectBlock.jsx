// src/modules/PixelPerfectBlock/PixelPerfectBlock.server.js
import { initServerI18n } from '@/i18n/utils/serverI18n';
import Container from '@/shared/container/Container';
import s from './PixelPerfectBlock.module.scss';

export default async function PixelPerfectBlock({ locale }) {
  const { t } = await initServerI18n(locale, ['pixelPerfectBlock']);

  return (
    <section className={s.sectionBlock}>
      <Container>
        <div className="pixel-perfect-block">
          <p className={s.description}>
            <span className={s.title}>{t('description.highlight1')}</span>{' '}
            {t('description.part2')}
            <span className={s.title}>{t('description.highlight2')}</span>{' '}
            {t('description.part3')} <span>{t('description.highlight3')}</span>{' '}
            {t('description.part4')}{' '}
            <span className={s.title}>{t('description.highlight4')}</span>{' '}
            {t('description.part5')}
          </p>
        </div>
      </Container>
    </section>
  );
}
