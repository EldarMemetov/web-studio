import Head from "next/head";

export default function AboutUs() {
  return (
    <main>
      <Head>
        <title>About Us - PixelPro Studio</title>
        <meta
          name="description"
          content="Learn more about PixelPro Studio, a web development and videography company in Germany."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About Us - PixelPro Studio" />
        <meta
          property="og:description"
          content="Discover PixelPro Studio, experts in web development and videography in Germany."
        />
        <meta name="twitter:card" content="summary_large_image" />

        {/* For German audience */}
        <meta
          name="description"
          content="Erfahren Sie mehr über PixelPro Studio, ein Unternehmen für Webentwicklung und Videografie in Deutschland."
        />
        <meta
          property="og:description"
          content="Entdecken Sie PixelPro Studio, Experten für Webentwicklung und Videografie in Deutschland."
        />
      </Head>
      <h1>Welcome to About Us Page</h1>
    </main>
  );
}
