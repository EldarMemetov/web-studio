'use client';

import { useState, useEffect, useRef } from 'react';
import SectionBlog from '../SectionBlog/SectionBlog';

export default function BlogCategoryPage({
  initialPosts,
  initialCategory,
  locale,
}) {
  const [category, setCategory] = useState(initialCategory);
  const [posts, setPosts] = useState(initialPosts);

  const cache = useRef({ [initialCategory]: initialPosts });

  useEffect(() => {
    if (cache.current[category]) {
      setPosts(cache.current[category]);
      return;
    }

    const fetchPosts = async () => {
      try {
        const res = await fetch(`/api/posts?category=${category}`);
        if (!res.ok) throw new Error('Ошибка при загрузке');

        const data = await res.json();
        cache.current[category] = data;
        setPosts(data);
      } catch (error) {
        console.error(error);
        setPosts([]);
      }
    };

    fetchPosts();
  }, [category]);

  return (
    <section>
      <div>
        <button
          onClick={() => setCategory('web')}
          disabled={category === 'web'}
        >
          Веб-розробка
        </button>
        <button
          onClick={() => setCategory('video')}
          disabled={category === 'video'}
        >
          Відеопродакшн
        </button>
      </div>

      <SectionBlog posts={posts} locale={locale} />
    </section>
  );
}
