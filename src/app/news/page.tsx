import { Column } from "@/once-ui/components";
import { News } from "@/components/news/News";
import { baseURL } from "@/app/resources";
import { news } from "@/app/resources/content";
import {
  generatePageMetadata,
  generateStructuredData,
  generatePersonSchema,
} from "@/app/utils/metadata";

export async function generateMetadata() {
  return generatePageMetadata({
    title: news.title,
    description: news.description,
    url: "/news",
  });
}

export default function NewsPage() {
  const structuredData = generateStructuredData({
    "@type": "CollectionPage",
    headline: news.title,
    description: news.description,
    url: `https://${baseURL}/news`,
    image: `https://${baseURL}/og?title=Latest%20News`,
    author: generatePersonSchema(),
    hasPart: news.newsItems.map((item) => ({
      "@type": "NewsArticle",
      headline: item.title,
      description: item.content,
      datePublished: item.date,
      url: `https://${baseURL}/news#${item.id}`,
    })),
  });

  return (
    <Column maxWidth="xl">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <News />
    </Column>
  );
}
