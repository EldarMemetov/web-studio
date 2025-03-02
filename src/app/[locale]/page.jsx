import TitleHome from "../../modules/HomePageComponets/TitleHome/TitleHome";
import WhyChooseUs from "../../modules/HomePageComponets/WhyChooseUs/WhyChooseUs";
import style from "./page.module.css";
export default function Home() {
  return (
    <main>
      <div className={style.divContainer}>
        <TitleHome />
        <WhyChooseUs />
      </div>
    </main>
  );
}
