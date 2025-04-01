import Container from '@/shared/container/Container';
import Icon from '@/shared/Icon/Icon';
import styles from './BrandTransformation.module.scss';
export default function BrandTransformation() {
  return (
    <section>
      <Container>
        <div>
          <h2 className={styles.title}>
            після нашої співпраціваш{' '}
            <span className={styles.titleAnd}>ваш бренд ...</span>
          </h2>
          <ul className={styles.ContainerList}>
            <li className={styles.ContainerItem}>
              <div className={styles.containerIcon}>
                <h3 className={styles.titleInformation}>
                  Впізнаваність і довіра
                </h3>
                <Icon iconName="icon-game" className={styles.game} />
              </div>

              <p className={styles.description}>
                Унікальний стиль зробить вашу компанію помітною та впізнаваною.
              </p>
              <Icon
                iconName="icon-trust"
                className={styles.iconStyle}
                width={160}
                height={103}
              />
            </li>
            <li className={styles.ContainerItem}>
              <div className={styles.containerIcon}>
                <h3 className={styles.titleInformation}>Професійний імідж</h3>
                <Icon iconName="icon-game" className={styles.game} />
              </div>

              <p className={styles.description}>
                Візуальна айдентика підкреслить ваш рівень і експертність.
              </p>
              <Icon
                iconName="icon-sight"
                className={styles.iconStyle}
                width={105}
                height={67}
              />
            </li>

            <li className={styles.ContainerItem}>
              <div className={styles.containerIcon}>
                <h3 className={styles.titleInformation}>
                  Привабливість для клієнтів
                </h3>
                <Icon iconName="icon-game" className={styles.game} />
              </div>

              <p className={styles.description}>
                Дизайн і стратегія допоможуть зацікавити й утримати аудиторію.
              </p>
              <Icon
                iconName="icon-clients"
                className={styles.iconStyle}
                width={85}
                height={100}
              />
            </li>
            <li className={styles.ContainerItem}>
              <div className={styles.containerIcon}>
                <h3 className={styles.titleInformation}>
                  Сильний візуальний стиль
                </h3>
                <Icon iconName="icon-game" className={styles.game} />
              </div>

              <p className={styles.description}>
                Узгоджена графіка та айдентика створять цілісне сприйняття
                бренду.
              </p>
              <Icon
                iconName="icon-style"
                className={styles.iconStyle}
                width={83}
                height={72}
              />
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
