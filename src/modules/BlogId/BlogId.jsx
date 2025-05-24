import Container from '@/shared/container/Container';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { portableTextComponents } from '@/lib/portableTextComponents';
import { urlFor } from '@/lib/sanityClient';
import s from './BlogId.module.scss';
import Icon from '@/shared/Icon/Icon';
import Link from 'next/link';
export default function BlogId({ post, locale }) {
  return (
    <article>
      {/* === Hero Section === */}
      <section className={s.hero}>
        <div className={s.heroImageWrapper}>
          <Image
            src={urlFor(post.mainImage).width(1600).height(600).url()}
            alt={post.title[locale]}
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className={s.heroOverlay}>
            <Container>
              <h1 className={s.heroTitle}>{post.title[locale]}</h1>
            </Container>
          </div>
        </div>
      </section>

      {/* === Article Body === */}
      <section className={s.section}>
        <Container>
          <div>
            <Link href={`/${locale}/blog#blog`} className={s.backLink}>
              <Icon iconName="icon-arrow" className={s.backIcon} />
              Усі публікації
            </Link>
          </div>
          <div className={s.article}>
            <PortableText
              value={post.body[locale]}
              components={portableTextComponents}
            />
          </div>
        </Container>
      </section>
    </article>
  );
}
