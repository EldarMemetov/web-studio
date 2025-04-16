import OurTeam from '@/modules/OurTeam/OurTeam';
// import { GetReviews } from '@/services/api';

export default async function AboutUs({ params: rawParams }) {
  const params = await rawParams;
  const availableLocales = ['en', 'ua', 'de'];
  const locale = availableLocales.includes(params?.locale)
    ? params.locale
    : 'en';
  // const reviews = await GetReviews();
  return (
    <main>
      <div>
        <h1>Welcome to About Us Page</h1>
        <OurTeam />
      </div>
    </main>
  );
}
