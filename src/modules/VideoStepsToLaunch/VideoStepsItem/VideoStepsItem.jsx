import AnimationInitializer from '@/shared/AnimationInitializer/AnimationInitializer';

import s from './VideoStepsItem.module.scss';
import Image from 'next/image';

const components = {
  StepsOne: () => (
    <Image
      src="/image/video/consultation.png"
      alt="consultation"
      width={477}
      height={409}
      className={s.consultation}
    />
  ),
  StepsTwo: () => (
    <Image
      src="/image/video/development.png"
      alt="development"
      width={560}
      height={351}
      className={s.development}
    />
  ),
  StepsThree: () => (
    <Image
      src="/image/video/videographer.png"
      alt="videographer"
      width={615}
      height={338}
      className={s.videographer}
    />
  ),
  StepFour: () => (
    <Image
      src="/image/video/production.png"
      alt="production"
      width={593}
      height={321}
      className={s.production}
    />
  ),
};

export default function VideoStepsItem({
  number,
  title,
  description,
  component,
  index,
}) {
  const Component = component ? components[component] : null;

  return (
    <>
      <AnimationInitializer
        options={{
          duration: 1000,
          easing: 'ease-in-out',
          once: true,
        }}
      />

      <li
        className={`${s.listItem} ${
          index % 2 === 0 ? s.normalOrder : s.reverseOrder
        } ${index === 4 ? s.lastStep : ''}`}
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div className={s.containerContent}>
          <h3
            className={`${s.info} ${number === 5 ? s.specialNumber : ''}`}
            data-aos="fade-down"
            data-aos-delay="400"
            data-aos-easing="ease-in-out"
          >
            {title}
          </h3>

          <h4
            className={`${s.number} ${index % 2 !== 0 ? s.leftNumber : ''} ${number === 5 ? s.specialNumber : ''}`}
            data-aos="fade-right"
            data-aos-delay="800"
            data-aos-easing="ease-in-out"
          >
            {number}
          </h4>

          <p
            className={s.infoTitle}
            data-aos="fade-right"
            data-aos-delay="800"
            data-aos-easing="ease-in-out"
          >
            {description}
          </p>
        </div>

        {Component && (
          <div
            data-aos="zoom-in"
            data-aos-delay="800"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
          >
            <Component />
          </div>
        )}
      </li>
    </>
  );
}
