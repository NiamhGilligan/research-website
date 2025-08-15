import { Column } from "@/once-ui/components";
import { ResearchProjects } from "@/components/research/ResearchProjects";
import { baseURL } from "@/app/resources";
import { work } from "@/app/resources/content";
import {
  generatePageMetadata,
  generateStructuredData,
  generatePersonSchema,
} from "@/app/utils/metadata";

export async function generateMetadata() {
  return generatePageMetadata({
    title: work.title,
    description: work.description,
    url: "/work",
  });
}

export default function Work() {
  const structuredData = generateStructuredData({
    "@type": "CollectionPage",
    headline: work.title,
    description: work.description,
    url: `https://${baseURL}/work`,
    image: `https://${baseURL}/og?title=Research%20Projects`,
    author: generatePersonSchema(),
    hasPart: work.projects.map((project) => ({
      "@type": "CreativeWork",
      headline: project.title,
      description: project.description,
      url: `https://${baseURL}/work#${project.id}`,
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
      <ResearchProjects />
    </Column>
  );
}
