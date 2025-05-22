import { urlFor } from '@/lib/sanityClient';
import Link from 'next/link';
import Image from 'next/image';
import s from './SectionBlog.module.scss';
export default function SectionBlog({ posts = [], locale }) {
  if (!posts.length) return <p>Нет постов</p>;

  return (
    <section className={s.section}>
      {posts.map((post) => (
        <article key={post._id}>
          <h2>{post.title[locale]}</h2>
          {post.mainImage && (
            <Image
              src={urlFor(post.mainImage).width(400).url()}
              alt={post.title[locale]}
              width={400}
              height={300}
              style={{ objectFit: 'cover' }}
            />
          )}
          <Link href={`/${locale}/blog/${post.customId.current}`}>Читать</Link>
        </article>
      ))}
    </section>
  );
}
