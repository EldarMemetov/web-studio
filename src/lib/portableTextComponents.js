import Image from 'next/image';
import { urlFor } from './sanityClient';

export const portableTextComponents = {
  types: {
    image: ({ value }) => (
      <Image
        src={urlFor(value).width(600).url()}
        alt={value.alt || ''}
        width={600}
        height={400}
      />
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a href={value.href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
  block: {
    h1: ({ children }) => <h1 className="pt-h1">{children}</h1>,
    h2: ({ children }) => <h2 className="pt-h2">{children}</h2>,
    h3: ({ children }) => <h3 className="pt-h3">{children}</h3>,
    normal: ({ children }) => <p className="pt-p-normal">{children}</p>,
    lead: ({ children }) => <p className="pt-p-lead">{children}</p>,
    small: ({ children }) => <p className="pt-p-small">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="pt-blockquote">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="pt-ul">{children}</ul>,
    number: ({ children }) => <ol className="pt-ol">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="pt-li">{children}</li>,
    number: ({ children }) => <li className="pt-li">{children}</li>,
  },
};
