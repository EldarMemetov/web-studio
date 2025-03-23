import Spline from '@splinetool/react-spline';
import styles from './splent.module.scss';

export default function Splent() {
  return (
    <div className={styles.containerD}>
      <Spline
        className={styles.spline}
        scene="https://prod.spline.design/7XOqoQy7rPx-WsHJ/scene.splinecode"
      />
    </div>
  );
}
