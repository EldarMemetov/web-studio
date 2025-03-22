import FeedbackForm from "../../modules/FeedbackForm/FeedbackForm";
import TitleHome from "../../modules/HomePageComponets/TitleHome/TitleHome";
import WhyChooseUs from "../../modules/HomePageComponets/WhyChooseUs/WhyChooseUs";
import ReviewsSection from "@/modules/GetReview/Components/ReviewsSection/ReviewsSection";
import { GetReviews } from "@/services/api";
import style from "./page.module.css";

export default async function Home() {
  const reviews = await GetReviews();
  return (
    <main>
      <div className={style.divContainer}>
        <TitleHome />
        <WhyChooseUs />
        <FeedbackForm />
        <ReviewsSection initialReviews={reviews} />
      </div>
    </main>
  );
}
