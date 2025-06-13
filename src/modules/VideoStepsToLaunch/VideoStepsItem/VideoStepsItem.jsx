import AnimationInitializer from '@/shared/AnimationInitializer/AnimationInitializer';
import StepsOne from '@/shared/components/StepsAnimations/StepsOne/StepsOne';
import StepsTwo from '@/shared/components/StepsAnimations/StepsTwo/StepsTwo';
import StepsThree from '@/shared/components/StepsAnimations/StepsThree/StepsThree';
import StepFour from '@/shared/components/StepsAnimations/StepsFour/StepsFour';
import s from './VideoStepsItem.module.scss';

const components = {
  StepsOne,
  StepsTwo,
  StepsThree,
  StepFour,
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
