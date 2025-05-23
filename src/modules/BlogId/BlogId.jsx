import Container from '@/shared/container/Container';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { portableTextComponents } from '@/lib/portableTextComponents';
import { urlFor } from '@/lib/sanityClient';
import s from './BlogId.module.scss';

export default function BlogId({ post, locale }) {
  return (
    <section className={s.section}>
      <Container>
        <article className={s.article}>
          <h1>{post.title[locale]}</h1>
          {/* {post.mainImage && (
            <Image
              src={urlFor(post.mainImage).width(800).url()}
              alt={post.title[locale]}
              width={800}
              height={500}
            />
          )} */}
          <PortableText
            value={post.body[locale]}
            components={portableTextComponents}
          />
        </article>
      </Container>
    </section>
  );
}
