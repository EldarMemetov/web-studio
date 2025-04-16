import SectionBlog from '@/modules/SectionBlog/SectionBlog';
import { GetBlog } from '@/services/api';

// page.jsx
export default async function BlogPage({ params: rawParams }) {
  const params = await rawParams;
  const availableLocales = ['en', 'ua', 'de'];
  const locale = availableLocales.includes(params?.locale)
    ? params.locale
    : 'en';

  const blog = await GetBlog(locale);

  console.log('📦 Полученные блоги:', blog);

  return (
    <main>
      <div>
        <SectionBlog blog={blog} locale={locale} />
      </div>
    </main>
  );
}
