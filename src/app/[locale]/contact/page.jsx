import Head from "next/head";

export default function Contact() {
  return (
    <main>
      <Head>
        <title>Contact Us - PixelPro Studio</title>
        <meta
          name="description"
          content="Get in touch with PixelPro Studio for your web development and videography needs."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contact Us - PixelPro Studio" />
        <meta
          property="og:description"
          content="Contact PixelPro Studio for professional web development and videography services."
        />
        <meta name="twitter:card" content="summary_large_image" />

        {/* For German audience */}
        <meta
          name="description"
          content="Kontaktieren Sie PixelPro Studio für Webentwicklung und Videografie-Dienstleistungen."
        />
        <meta
          property="og:description"
          content="Kontaktieren Sie PixelPro Studio für professionelle Webentwicklung und Videografie-Dienstleistungen."
        />
      </Head>
      <h1>Welcome to Contact Us Page</h1>
    </main>
  );
}
