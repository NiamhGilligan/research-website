import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";

export interface PageMetadata {
  title: string;
  description: string;
  url: string;
  type?: string;
  hasPart?: any[];
  image?: any[];
}

export function generatePageMetadata(metadata: PageMetadata) {
  const {
    title,
    description,
    url,
    type = "website",
    hasPart,
    image,
  } = metadata;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type,
      url: `https://${baseURL}${url}`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export function generateStructuredData(schema: any) {
  return {
    "@context": "https://schema.org",
    ...schema,
  };
}

export function generatePersonSchema() {
  return {
    "@type": "Person",
    name: person.name,
    image: {
      "@type": "ImageObject",
      url: `https://${baseURL}${person.avatar}`,
    },
  };
}
