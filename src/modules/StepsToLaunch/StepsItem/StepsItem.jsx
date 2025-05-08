'use client';

import AnimationInitializer from '@/shared/AnimationInitializer/AnimationInitializer';
import StepsOne from '@/shared/components/StepsAnimations/StepsOne/StepsOne';
import StepsTwo from '@/shared/components/StepsAnimations/StepsTwo/StepsTwo';
import StepsThree from '@/shared/components/StepsAnimations/StepsThree/StepsThree';
import StepFour from '@/shared/components/StepsAnimations/StepsFour/StepsFour';
import s from './StepsItem.module.scss';

const components = {
  StepsOne,
  StepsTwo,
  StepsThree,
  StepFour,
};

export default function StepsItem({ number, title, description, component }) {
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
        className={s.listItem}
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div className={s.containerContent}>
          <h3
            className={s.info}
            data-aos="fade-down"
            data-aos-delay="400"
            data-aos-easing="ease-in-out"
          >
            {title}
          </h3>
          <h4
            className={s.number}
            data-aos="fade-right"
            data-aos-delay="800"
            data-aos-easing="ease-in-out"
          >
            {number}
          </h4>
        </div>

        <p
          className={s.infoTitle}
          data-aos="fade-right"
          data-aos-delay="800"
          data-aos-easing="ease-in-out"
        >
          {description}
        </p>

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
