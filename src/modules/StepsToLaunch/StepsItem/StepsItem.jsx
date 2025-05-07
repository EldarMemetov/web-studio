'use client';

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
    <li className={s.listItem}>
      <div className={s.containerContent}>
        <h3 className={s.info}>{title}</h3>
        <h4 className={s.number}>{number}</h4>
      </div>
      <p className={s.infoTitle}>{description}</p>
      {Component && <Component />}
    </li>
  );
}
