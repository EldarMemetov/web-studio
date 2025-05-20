import groq from 'groq';

export const allPostsQuery = groq`
  *[_type == "post"]{
    _id,
    title,
    slug,
    body,
    mainImage,
    customId
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && customId.current == $id][0]{
    _id,
    title,
    body,
    mainImage,
    customId
  }
`;
