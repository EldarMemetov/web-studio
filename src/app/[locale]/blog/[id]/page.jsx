// import BlogId from '@/modules/BlogId/BlogId';

// export default async function BlogIdCollection({ params: rawParams }) {
//   const params = await rawParams;
//   const availableLocales = ['en', 'ua', 'de'];
//   const locale = availableLocales.includes(params?.locale)
//     ? params.locale
//     : 'en';
//   const id = params?.id;
//   return (
//     <main>
//       <div>
//         <BlogId locale={locale} id={id} />
//       </div>
//     </main>
//   );
// }
import BlogId from '@/modules/BlogId/BlogId';
import { initServerI18n } from '@/i18n/utils/serverI18n';
import { notFound } from 'next/navigation';

// Генерация путей для SSG
export async function generateStaticParams() {
  const locales = ['en', 'ua', 'de'];

  const paths = await Promise.all(
    locales.map(async (locale) => {
      const { t } = await initServerI18n(locale, ['blog']);
      const blogData = t('posts', { returnObjects: true });

      return Object.keys(blogData).map((id) => ({
        locale,
        id,
      }));
    })
  );

  return paths.flat();
}

// SEO
export async function generateMetadata({ params }) {
  const { locale, id } = params;
  const { t } = await initServerI18n(locale, ['blog']);
  const blogData = t('posts', { returnObjects: true });
  const post = blogData[id];

  if (!post) return {};

  return {
    title: post.title,
    description: post.description || '',
  };
}

// Рендер страницы
export default async function BlogIdPage({ params }) {
  const { locale, id } = params;
  const { t } = await initServerI18n(locale, ['blog']);
  const blogData = t('posts', { returnObjects: true });
  const post = blogData[id];

  if (!post) notFound();

  return (
    <main>
      <BlogId locale={locale} id={id} />
    </main>
  );
}
