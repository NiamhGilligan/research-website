import { Column } from "@/once-ui/components";
import { Team } from "@/components/team/Team";
import { baseURL } from "@/app/resources";
import { team, person } from "@/app/resources/content";

export async function generateMetadata() {
  const title = team.title;
  const description = team.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/team`,
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

export default function TeamPage() {
  return (
    <Column maxWidth="l">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: team.title,
            description: team.description,
            url: `https://${baseURL}/team`,
            author: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      <Team />
    </Column>
  );
}
