import Container from '@/shared/container/Container';
import Image from 'next/image';
import s from './OurTeam.module.scss';
export default function OurTeam() {
  return (
    <section className={s.section}>
      <Container>
        <div>
          <h2 className={s.title}>
            наша <span className={s.spanTitle}>Команда</span>
          </h2>
          <ul className={s.listContainer}>
            <li className={s.itemList}>
              <h3 className={s.name}>Maria Soloveychenko</h3>
              <h4 className={s.jobTitle}>UI/UX Designer</h4>
              <p className={s.description}>Web & Mobile Design, Prototyping</p>
              <Image
                src="/image/eldar.png"
                alt="team"
                width={350}
                height={420}
                className={s.teamImg}
              />
              <h4 className={s.backgroundName}>Maria Soloveychenko</h4>
            </li>
            <li className={s.itemList}>
              <h3 className={s.name}>Maria Soloveychenko</h3>
              <h4 className={s.jobTitle}>UI/UX Designer</h4>
              <p className={s.description}>Web & Mobile Design, Prototyping</p>
              <Image
                src="/image/eldar.png"
                alt="team"
                width={350}
                height={420}
                className={s.teamImg}
              />
              <h4 className={s.backgroundName}>Maria Soloveychenko</h4>
            </li>
            <li className={s.itemList}>
              <h3 className={s.name}>Maria Soloveychenko</h3>
              <h4 className={s.jobTitle}>UI/UX Designer</h4>
              <p className={s.description}>Web & Mobile Design, Prototyping</p>
              <Image
                src="/image/eldar.png"
                alt="team"
                width={350}
                height={420}
                className={s.teamImg}
              />
              <h4 className={s.backgroundName}>Maria Soloveychenko</h4>
            </li>
            <li className={s.itemList}>
              <h3 className={s.name}>Maria Soloveychenko</h3>
              <h4 className={s.jobTitle}>UI/UX Designer</h4>
              <p className={s.description}>Web & Mobile Design, Prototyping</p>
              <Image
                src="/image/eldar.png"
                alt="team"
                width={350}
                height={420}
                className={s.teamImg}
              />
              <h4 className={s.backgroundName}>Maria Soloveychenko</h4>
            </li>
            <li className={s.itemList}>
              <h3 className={s.name}>Maria Soloveychenko</h3>
              <h4 className={s.jobTitle}>UI/UX Designer</h4>
              <p className={s.description}>Web & Mobile Design, Prototyping</p>
              <Image
                src="/image/eldar.png"
                alt="team"
                width={350}
                height={420}
                className={s.teamImg}
              />
              <h4 className={s.backgroundName}>Maria Soloveychenko</h4>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
