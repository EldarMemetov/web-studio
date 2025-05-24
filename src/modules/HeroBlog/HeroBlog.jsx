import Container from '@/shared/container/Container';
import ScrollButton from '@/shared/ScrollButton/ScrollButton';
import s from './HeroBlog.module.scss';
export default function HeroBlog() {
  return (
    <section className={s.section}>
      <div className={s.background}></div>
      <Container>
        <div className={s.contentContainer}>
          <h1 className={s.title}>Блог QVRIX</h1>
          <p className={s.description}>
            Кожна публікація — це частинка досвіду, ідей та натхнення, якими ми
            хочемо поділитись з вами.
          </p>
          <div className={s.containerButton}>
            <ScrollButton targetId="feedback-form" variant="variant2">
              Поговоримо
            </ScrollButton>
            <ScrollButton targetId="blog" variant="variant3">
              Читати статті
            </ScrollButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
