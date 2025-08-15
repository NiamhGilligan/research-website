import { Column } from "@/once-ui/components";
import { ResearchProjects } from "@/components/research/ResearchProjects";
import { baseURL } from "@/app/resources";
import { work } from "@/app/resources/content";
import {
  generatePageMetadata,
  generateStructuredData,
  generatePersonSchema,
} from "@/app/utils/metadata";
import styles from "@/components/research/ResearchProjects.module.scss";

export async function generateMetadata() {
  return generatePageMetadata({
    title: work.title,
    description: work.description,
    url: "/research",
  });
}

export default function Research() {
  const structuredData = generateStructuredData({
    "@type": "CollectionPage",
    headline: work.title,
    description: work.description,
    url: `https://${baseURL}/research`,
    image: `https://${baseURL}/og?title=Research%20Projects`,
    author: generatePersonSchema(),
    hasPart: work.projects.map((project) => ({
      "@type": "CreativeWork",
      headline: project.title,
      description: project.description,
      url: `https://${baseURL}/research#${project.id}`,
    })),
  });

  return (
    <Column maxWidth="xl" className={styles.researchPageWrapper}>
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
