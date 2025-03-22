import ReviewsForm from "@/modules/ReviewsForm/ReviewsForm";
import FeedbackForm from "../../modules/FeedbackForm/FeedbackForm";
import TitleHome from "../../modules/HomePageComponets/TitleHome/TitleHome";
import WhyChooseUs from "../../modules/HomePageComponets/WhyChooseUs/WhyChooseUs";

import style from "./page.module.css";
export default function Home() {
  return (
    <main>
      <div className={style.divContainer}>
        <TitleHome />
        <WhyChooseUs />
        <FeedbackForm />
        <ReviewsForm />
      </div>
    </main>
  );
}
