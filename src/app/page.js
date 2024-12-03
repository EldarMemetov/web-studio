import Head from "next/head";
import TitleHome from "./components/HomePageComponets/TitleHome/TitleHome";
import WhyChooseUs from "./components/HomePageComponets/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Home - PixelPro Studio</title>
        <meta
          name="description"
          content="Welcome to PixelPro Studio, experts in web development and videography."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Home - PixelPro Studio" />
        <meta
          property="og:description"
          content="PixelPro Studio is a web development and videography company based in Germany."
        />
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="description"
          content="Willkommen bei PixelPro Studio, Experten für Webentwicklung und Videografie."
        />
        <meta
          property="og:description"
          content="PixelPro Studio ist ein Unternehmen für Webentwicklung und Videografie in Deutschland."
        />
      </Head>
      <TitleHome />
      <WhyChooseUs />
    </main>
  );
}
