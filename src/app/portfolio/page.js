import Head from "next/head";

export default function Portfolio() {
  return (
    <main>
      <Head>
        <title>Portfolio - PixelPro Studio</title>
        <meta
          name="description"
          content="Explore the portfolio of PixelPro Studio, showcasing web development and videography projects."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Portfolio - PixelPro Studio" />
        <meta
          property="og:description"
          content="Discover the web development and videography projects by PixelPro Studio."
        />
        <meta name="twitter:card" content="summary_large_image" />

        {/* For German audience */}
        <meta
          name="description"
          content="Entdecken Sie das Portfolio von PixelPro Studio mit Webentwicklungs- und Videografie-Projekten."
        />
        <meta
          property="og:description"
          content="Erkunden Sie die Webentwicklungs- und Videografie-Projekte von PixelPro Studio."
        />
      </Head>
      <h1>Welcome to Portfolio Page</h1>
    </main>
  );
}
