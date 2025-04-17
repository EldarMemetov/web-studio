import Container from '@/shared/container/Container';
import { initServerI18n } from '@/i18n/utils/serverI18n';
import Image from 'next/image';

export default async function BlogId({ locale, id }) {
  const { t } = await initServerI18n(locale, ['blog']);

  const blogData = t('posts', { returnObjects: true });
  const post = blogData[id];

  if (!post) {
    return (
      <section>
        <Container>
          <h1>Пост не найден</h1>
        </Container>
      </section>
    );
  }

  return (
    <section>
      <Container>
        <div>
          {post.image && (
            <Image src={post.image} alt={post.title} width={800} height={400} />
          )}
          <h1>{post.title}</h1>
          <p>{post.description}</p>

          {/* content может быть массивом параграфов, заголовков и списков */}
          {Array.isArray(post.content) &&
            post.content.map((block, index) => (
              <div key={index}>
                {block.heading && <h2>{block.heading}</h2>}
                {block.text && <p>{block.text}</p>}
                {block.ulContent && (
                  <ul>
                    {block.ulContent.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

          {/* Если content — строка */}
          {typeof post.content === 'string' && <p>{post.content}</p>}
        </div>
      </Container>
    </section>
  );
}
