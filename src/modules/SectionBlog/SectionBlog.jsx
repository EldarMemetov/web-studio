import Container from '@/shared/container/Container';
import { initServerI18n } from '@/i18n/utils/serverI18n';
import Image from 'next/image';
import LinkButton from '@/shared/components/LinkButton/LinkButton';
import { LINKDATA } from '@/shared/constants';

export default async function SectionBlog({ locale }) {
  const { t } = await initServerI18n(locale, ['blog']);

  const blogData = t('posts', { returnObjects: true });

  return (
    <section>
      <Container>
        <div>
          {Object.entries(blogData).map(([id, post]) => (
            <div key={id}>
              {post.image && (
                <Image
                  src={post.image}
                  alt={post.title}
                  width={363}
                  height={383}
                />
              )}
              <h2>{post.title}</h2>
              <p>{post.description}</p>

              <LinkButton
                path={`/${locale}/blog/${id}`}
                linkText="Читати далі"
                type={LINKDATA.TYPE_LIGHT_BORDER}
                className="custom-blog-button"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
