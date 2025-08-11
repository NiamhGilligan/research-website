import { Column } from "@/once-ui/components";
import { News } from "@/components/news/News";
import { baseURL } from "@/app/resources";
import { news, person } from "@/app/resources/content";

export async function generateMetadata() {
  const title = news.title;
  const description = news.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/news`,
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

export default function NewsPage() {
  return (
    <Column maxWidth="xl">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            headline: news.title,
            description: news.description,
            url: `https://${baseURL}/news`,
            image: `${baseURL}/og?title=Latest%20News`,
            author: {
              "@type": "Person",
              name: person.name,
            },
            hasPart: news.newsItems.map((item) => ({
              "@type": "NewsArticle",
              headline: item.title,
              description: item.content,
              datePublished: item.date,
              url: `https://${baseURL}/news#${item.id}`,
            })),
          }),
        }}
      />
      <News />
    </Column>
  );
}
