import { Column } from "@/once-ui/components";
import { ResearchProjects } from "@/components/research/ResearchProjects";
import { baseURL } from "@/app/resources";
import { person, work } from "@/app/resources/content";

export async function generateMetadata() {
  const title = work.title;
  const description = work.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/work/`,
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

export default function Work() {
  return (
    <Column maxWidth="xl">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            headline: work.title,
            description: work.description,
            url: `https://${baseURL}/work`,
            image: `${baseURL}/og?title=Research%20Projects`,
            author: {
              "@type": "Person",
              name: person.name,
            },
            hasPart: work.projects.map((project) => ({
              "@type": "CreativeWork",
              headline: project.title,
              description: project.description,
              url: `https://${baseURL}/work#${project.id}`,
            })),
          }),
        }}
      />
      <ResearchProjects />
    </Column>
  );
}
