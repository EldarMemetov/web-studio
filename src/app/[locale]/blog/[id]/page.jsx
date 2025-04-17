import BlogId from '@/modules/BlogId/BlogId';

export default async function BlogIdCollection({ params: rawParams }) {
  const params = await rawParams;
  const availableLocales = ['en', 'ua', 'de'];
  const locale = availableLocales.includes(params?.locale)
    ? params.locale
    : 'en';
  const id = params?.id;
  return (
    <main>
      <div>
        <BlogId locale={locale} id={id} />
      </div>
    </main>
  );
}
