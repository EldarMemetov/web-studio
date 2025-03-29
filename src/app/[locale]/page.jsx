import FeedbackForm from '../../modules/FeedbackForm/FeedbackForm';
import TitleHome from '../../modules/HomePageComponets/TitleHome/TitleHome';

import ReviewsForm from '@/modules/ReviewsForm/ReviewsForm';
import ReviewsList from '@/modules/GetReview/Components/ReviewsList/ReviewsList';
import { ReviewsSection } from '@/modules/GetReview/Components/ReviewsSection/ReviewsSection';
import { GetReviews } from '@/services/api';
import style from './page.module.css';
import { SocialLinks } from '@/modules/Header/SocialLinks/SocialLinks';
import TextAnimation from '@/modules/TextAnimation/TextAnimation';
import FetchServices from '@/modules/FetchServices/FetchServices';
import PixelPerfectBlock from '@/modules/PixelPerfectBlock/PixelPerfectBlock';
import OurTeam from '../../modules/OurTeam/OurTeam';
export default async function Home() {
  const reviews = await GetReviews();

  return (
    <main>
      <div className={style.divContainer}>
        <TitleHome />
        <FetchServices />
        <PixelPerfectBlock />
        <OurTeam />
        <TextAnimation />
        <FeedbackForm />
        <SocialLinks />
        <ReviewsSection initialReviews={reviews}>
          <ReviewsForm />
          <ReviewsList />
        </ReviewsSection>
      </div>
    </main>
  );
}
