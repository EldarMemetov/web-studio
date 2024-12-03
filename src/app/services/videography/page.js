import Head from "next/head";

export default function Videography() {
  return (
    <main>
      <Head>
        <title>Videography - PixelPro Studio</title>
        <meta
          name="description"
          content="View the videography services offered by PixelPro Studio in Germany."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Videography - PixelPro Studio" />
        <meta
          property="og:description"
          content="Explore the videography services provided by PixelPro Studio in Germany."
        />
        <meta name="twitter:card" content="summary_large_image" />

        {/* For German audience */}
        <meta
          name="description"
          content="Sehen Sie sich die Videografie-Dienstleistungen von PixelPro Studio in Deutschland an."
        />
        <meta
          property="og:description"
          content="Entdecken Sie die Videografie-Dienstleistungen von PixelPro Studio in Deutschland."
        />
      </Head>
      <h1>Welcome to Videography Page</h1>
    </main>
  );
}
