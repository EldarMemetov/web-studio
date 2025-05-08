import Container from '@/shared/container/Container';
import s from './HeroVideo.module.scss';

export default function HeroVideo() {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.videoWrapper}>
          <iframe
            width="600px"
            height="600px"
            src="https://www.youtube.com/embed/K5yww7lCrvk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Container>
    </section>
  );
}
