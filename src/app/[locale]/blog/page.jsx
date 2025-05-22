import BlogCategoryPage from '@/modules/BlogCategoryPage/BlogCategoryPage';
import { client } from '@/lib/sanityClient';
import { postsByCategoryQuery } from '@/lib/queries';

export default async function BlogPage({ params: rawParams }) {
  const params = await rawParams;
  const locale = ['en', 'ua', 'de'].includes(params?.locale)
    ? params.locale
    : 'en';

  const defaultCategory = 'web';
  const posts = await client.fetch(postsByCategoryQuery, {
    category: defaultCategory,
  });

  return (
    <main>
      <BlogCategoryPage
        initialPosts={posts}
        initialCategory={defaultCategory}
        locale={locale}
      />
    </main>
  );
}
