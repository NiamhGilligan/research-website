import { Column } from "@/once-ui/components";
import { Publications } from "@/components/publications/Publications";
import { baseURL } from "@/app/resources";
import { publications } from "@/app/resources/content";
import {
  generatePageMetadata,
  generateStructuredData,
  generatePersonSchema,
} from "@/app/utils/metadata";

export async function generateMetadata() {
  return generatePageMetadata({
    title: publications.title,
    description: publications.description,
    url: "/publications",
  });
}

export default function PublicationsPage() {
  const structuredData = generateStructuredData({
    "@type": "CollectionPage",
    headline: publications.title,
    description: publications.description,
    url: `https://${baseURL}/publications`,
    image: `https://${baseURL}/og?title=${encodeURIComponent(
      publications.title
    )}`,
    author: generatePersonSchema(),
  });

  return (
    <Column maxWidth="s">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Publications />
    </Column>
  );
}
