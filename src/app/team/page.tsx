import { Column } from "@/once-ui/components";
import { Team } from "@/components/team/Team";
import { baseURL } from "@/app/resources";
import { team } from "@/app/resources/content";
import {
  generatePageMetadata,
  generateStructuredData,
  generatePersonSchema,
} from "@/app/utils/metadata";

export async function generateMetadata() {
  return generatePageMetadata({
    title: team.title,
    description: team.description,
    url: "/team",
  });
}

export default function TeamPage() {
  const structuredData = generateStructuredData({
    "@type": "Organization",
    name: team.title,
    description: team.description,
    url: `https://${baseURL}/team`,
    author: generatePersonSchema(),
  });

  return (
    <Column maxWidth="l">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Team />
    </Column>
  );
}
