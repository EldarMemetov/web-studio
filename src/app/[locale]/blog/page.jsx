import SectionBlog from '@/modules/SectionBlog/SectionBlog';

export default async function BlogPage({ params: rawParams }) {
  const params = await rawParams;
  const availableLocales = ['en', 'ua', 'de'];
  const locale = availableLocales.includes(params?.locale)
    ? params.locale
    : 'en';

  return (
    <main>
      <div>
        <SectionBlog locale={locale} />
      </div>
    </main>
  );
}
