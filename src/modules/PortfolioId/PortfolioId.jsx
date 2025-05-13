// modules/PortfolioId/PortfolioId.js
import Container from '@/shared/container/Container';
import Image from 'next/image';
import { initServerI18n } from '@/i18n/utils/serverI18n';

export default async function PortfolioId({ locale, id }) {
  const { t } = await initServerI18n(locale, ['webPortfolio']);
  const projects = t('projects', { returnObjects: true });
  const project = projects[id];

  if (!project) {
    return (
      <section>
        <Container>
          <h1>Проєкт не знайдено</h1>
        </Container>
      </section>
    );
  }

  return (
    <section>
      <Container>
        <h1>{project.title}</h1>
        <p>{project.description}</p>

        <div className="project-images">
          <Image
            src={project.image1}
            alt={project.title}
            className={project.image1.className}
          />
          <Image
            src={project.image2}
            alt={project.title}
            className={project.image2.className}
          />
        </div>

        <video controls width="800">
          <source src={project.video} type="video/mp4" />
          Ваш браузер не підтримує відео.
        </video>
      </Container>
    </section>
  );
}
