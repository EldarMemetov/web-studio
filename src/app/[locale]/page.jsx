import dynamic from 'next/dynamic';

import { ReviewsSection } from '@/modules/GetReview/Components/ReviewsSection/ReviewsSection';
import { GetReviews } from '@/services/api';

import TextAnimation from '@/modules/TextAnimation/TextAnimation';
import FetchServices from '@/modules/FetchServices/FetchServices';
import PixelPerfectBlock from '@/modules/PixelPerfectBlock/PixelPerfectBlock';
import GetBusinessSolutions from '@/modules/GetBusinessSolutions/GetBusinessSolutions';
import BrandTransformation from '@/modules/BrandTransformation/BrandTransformation';
import ToggleQuestions from '@/modules/ToggleQuestions/ToggleQuestions';
import s from './page.module.scss';
import IdeasHome from '@/modules/IdeasHome/IdeasHome';
import TitleHome from '@/modules/HomePageComponets/TitleHome/TitleHome';
import FeedbackForm from '@/modules/FeedbackForm/FeedbackForm';

const ReviewsList = dynamic(
  () => import('@/modules/GetReview/Components/ReviewsList/ReviewsList')
);
const Portfolio = dynamic(() => import('@/modules/Portfolio/Portfolio'));
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
        <IdeasHome locale={locale} />
        <BrandTransformation locale={locale} />
        <TextAnimation locale={locale} />
        <Portfolio locale={locale} />
        <ReviewsSection initialReviews={reviews}>
          <ReviewsList />
        </ReviewsSection>
        <ToggleQuestions locale={locale} />
        <FeedbackForm />
      </div>
    </main>
  );
}
