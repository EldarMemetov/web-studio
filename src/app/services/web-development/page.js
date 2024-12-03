import Head from "next/head";

export default function WebDevelopment() {
  return (
    <main>
      <Head>
        <title>Web Development - PixelPro Studio</title>
        <meta
          name="description"
          content="Discover professional web development services by PixelPro Studio."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Web Development - PixelPro Studio" />
        <meta
          property="og:description"
          content="PixelPro Studio offers web development services in Germany with a focus on quality and performance."
        />
        <meta name="twitter:card" content="summary_large_image" />

        {/* For German audience */}
        <meta
          name="description"
          content="Entdecken Sie professionelle Webentwicklungs-Dienstleistungen von PixelPro Studio."
        />
        <meta
          property="og:description"
          content="PixelPro Studio bietet Webentwicklungs-Dienstleistungen in Deutschland mit Fokus auf Qualität und Leistung."
        />
      </Head>
      <h1>Welcome to Web Development Page</h1>
    </main>
  );
}
