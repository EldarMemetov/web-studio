import Image from 'next/image';
import s from './StepsThree.module.scss';
export default function StepsThree() {
  return (
    <div>
      <Image
        src="/image/steps-three.png"
        alt="steps-three"
        width={240}
        height={205}
      />
    </div>
  );
}
