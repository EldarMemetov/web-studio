import FeedbackForm from '../../modules/FeedbackForm/FeedbackForm';
import TitleHome from '../../modules/HomePageComponets/TitleHome/TitleHome';
import ReviewsForm from '@/modules/ReviewsForm/ReviewsForm';
import ReviewsList from '@/modules/GetReview/Components/ReviewsList/ReviewsList';
import { ReviewsSection } from '@/modules/GetReview/Components/ReviewsSection/ReviewsSection';
import { GetReviews } from '@/services/api';
import { SocialLinks } from '@/modules/Header/SocialLinks/SocialLinks';
import TextAnimation from '@/modules/TextAnimation/TextAnimation';
import FetchServices from '@/modules/FetchServices/FetchServices';
import PixelPerfectBlock from '@/modules/PixelPerfectBlock/PixelPerfectBlock';
import GetBusinessSolutions from '@/modules/GetBusinessSolutions/GetBusinessSolutions';
import BrandTransformation from '@/modules/BrandTransformation/BrandTransformation';
import ToggleQuestions from '@/modules/ToggleQuestions/ToggleQuestions';
import IdeasToReality from '@/modules/IdeasToReality/IdeasToReality';
import s from './page.module.scss';
export default async function Home({ params: rawParams }) {
  const params = await rawParams;
  const availableLocales = ['en', 'ua', 'de'];
  const locale = availableLocales.includes(params?.locale)
    ? params.locale
    : 'en';
  const reviews = await GetReviews();

  return (
    <main>
      <div className={s.container}>
        <TitleHome locale={locale} />
        <FetchServices />
        <PixelPerfectBlock locale={locale} />
        <GetBusinessSolutions locale={locale} />
        <IdeasToReality locale={locale} />
        <BrandTransformation />
        <TextAnimation />
        <ReviewsSection initialReviews={reviews}>
          <ReviewsList />
        </ReviewsSection>
        <ToggleQuestions locale={locale} />
        <FeedbackForm />
        <SocialLinks />
      </div>
    </main>
  );
}
