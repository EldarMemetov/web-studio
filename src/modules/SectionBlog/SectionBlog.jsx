export default function SectionBlog({ blog, locale }) {
  const blogPosts = blog?.data?.blogs || [];

  return (
    <div>
      {blogPosts.length > 0 ? (
        blogPosts.map((post) => (
          <div key={post._id}>
            <h2>{post.title?.[locale] || 'No Title Available'}</h2>

            {Array.isArray(post.content?.[locale]) ? (
              post.content[locale].map((block, index) => (
                <div key={index}>
                  {block.heading && <h3>{block.heading}</h3>}
                  {block.text && <p>{block.text}</p>}
                  {Array.isArray(block.ulContent) && (
                    <ul>
                      {block.ulContent.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))
            ) : (
              <p>No content available for this language.</p>
            )}
          </div>
        ))
      ) : (
        <p>No blog posts available.</p>
      )}
    </div>
  );
}
