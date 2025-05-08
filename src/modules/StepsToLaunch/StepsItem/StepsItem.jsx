import StepsOne from '@/shared/components/StepsAnimations/StepsOne/StepsOne';
import StepsTwo from '@/shared/components/StepsAnimations/StepsTwo/StepsTwo';
import StepsThree from '@/shared/components/StepsAnimations/StepsThree/StepsThree';
import StepFour from '@/shared/components/StepsAnimations/StepsFour/StepsFour';

import s from './StepsItem.module.scss';

const components = {
  StepsOne: StepsOne,
  StepsTwo: StepsTwo,
  StepsThree: StepsThree,
  StepFour: StepFour,
};

export default function StepsItem({ number, title, description, component }) {
  const Component = component ? components[component] : null;

  return (
    <li className={s.listItem} data-aos="fade-right" data-aos-duration="1000">
      <div className={s.containerContent}>
        <h3 className={s.info} data-aos="fade-top" data-aos-delay="200">
          {title}
        </h3>
        <h4 className={s.number} data-aos="fade-right" data-aos-delay="400">
          {number}
        </h4>
      </div>
      <p className={s.infoTitle} data-aos="fade-top" data-aos-delay="600">
        {description}
      </p>
      {Component && (
        <div data-aos="zoom-in" data-aos-delay="800">
          <Component />
        </div>
      )}
    </li>
  );
}
