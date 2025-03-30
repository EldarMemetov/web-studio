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

export default async function Home({ params: rawParams }) {
  // const { locale } = await rawParams;

  const params = await rawParams;
  const availableLocales = ['en', 'ua', 'ru'];
  const locale = availableLocales.includes(params?.locale)
    ? params.locale
    : 'en';
  const reviews = await GetReviews();

  return (
    <main>
      <div className={style.divContainer}>
        <TitleHome locale={locale} />
        <FetchServices />
        <PixelPerfectBlock locale={locale} />
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
