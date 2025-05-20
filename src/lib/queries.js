import groq from 'groq';

export const allPostsQuery = groq`
  *[_type == "post"]{
    _id,
    title,
    body,
    mainImage
  }
`;

export const postByIdQuery = groq`
  *[_type == "post" && _id == $id][0]{
    _id,
    title,
    body,
    mainImage
  }
`;
