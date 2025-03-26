import FeedbackForm from '../../modules/FeedbackForm/FeedbackForm';
import TitleHome from '../../modules/HomePageComponets/TitleHome/TitleHome';
import WhyChooseUs from '../../modules/HomePageComponets/WhyChooseUs/WhyChooseUs';
import ReviewsForm from '@/modules/ReviewsForm/ReviewsForm';
import ReviewsList from '@/modules/GetReview/Components/ReviewsList/ReviewsList';
import { ReviewsSection } from '@/modules/GetReview/Components/ReviewsSection/ReviewsSection';
import { GetReviews } from '@/services/api';
import style from './page.module.css';
import { SocialLinks } from '@/modules/Header/SocialLinks/SocialLinks';
import TextAnimation from '@/modules/TextAnimation/TextAnimation';

export default async function Home() {
  const reviews = await GetReviews();

  return (
    <main>
      <div className={style.divContainer}>
        <TitleHome />
        <WhyChooseUs />
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
