// import BlogId from '@/modules/BlogId/BlogId';
// import { initServerI18n } from '@/i18n/utils/serverI18n';

// export async function generateMetadata({ params: rawParams }) {
//   const params = await rawParams;

//   const availableLocales = ['en', 'ua', 'de'];
//   const locale = availableLocales.includes(params?.locale)
//     ? params.locale
//     : 'en';
//   const id = params?.id;

//   const { t } = await initServerI18n(locale, ['blog']);
//   const blogData = t('posts', { returnObjects: true });
//   const post = blogData[id];

//   if (!post) return {};

//   return {
//     title: post.title,
//     description: post.description || '',
//   };
// }

// export async function generateStaticParams() {
//   const locales = ['en', 'ua', 'de'];
//   const paths = await Promise.all(
//     locales.map(async (locale) => {
//       const { t } = await initServerI18n(locale, ['blog']);
//       const blogData = t('posts', { returnObjects: true });

//       return Object.keys(blogData).map((id) => ({
//         locale,
//         id,
//       }));
//     })
//   );
//   return paths.flat();
// }

// export default async function BlogIdPage({ params: rawParams }) {
//   const params = await rawParams;

//   const availableLocales = ['en', 'ua', 'de'];
//   const locale = availableLocales.includes(params?.locale)
//     ? params.locale
//     : 'en';
//   const id = params?.id;

//   return (
//     <main>
//       <BlogId locale={locale} id={id} />
//     </main>
//   );
// }
import BlogId from '@/modules/BlogId/BlogId';
import { client } from '@/lib/sanityClient';
import { postBySlugQuery } from '@/lib/queries';

export async function generateStaticParams() {
  const posts = await client.fetch(`*[_type == "post"]{ customId }`);
  const locales = ['en', 'ua', 'de'];
  return posts.flatMap((post) =>
    locales.map((locale) => ({ id: post.customId.current, locale }))
  );
}

export default async function BlogIdPage({ params }) {
  const { locale, id } = await params;

  const post = await client.fetch(postBySlugQuery, { id });

  if (!post) return <div>Пост не найден</div>;

  return (
    <main>
      <BlogId post={post} locale={locale} />
    </main>
  );
}
