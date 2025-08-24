import React from "react";
import {
  Heading,
  Flex,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
} from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";
import { HomeCarousel } from "@/components/HomeCarousel";
import { baseURL, routes } from "@/app/resources";
import { home, about, person, team } from "@/app/resources/content";

import { Posts } from "@/components/blog/Posts";
import {
  generatePageMetadata,
  generateStructuredData,
  generatePersonSchema,
} from "@/app/utils/metadata";

export async function generateMetadata() {
  return generatePageMetadata({
    title: home.title,
    description: home.description,
    url: "/",
  });
}

export default function Home() {
  const structuredData = generateStructuredData({
    "@type": "WebPage",
    name: home.title,
    description: home.description,
    url: `https://${baseURL}`,
    image: `https://${baseURL}/og?title=${encodeURIComponent(home.title)}`,
    publisher: generatePersonSchema(),
  });

  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Column fillWidth paddingY="l" gap="m">
        <Column maxWidth="l">
          <RevealFx
            translateY="4"
            fillWidth
            horizontal="start"
            paddingBottom="m"
          >
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx
            translateY="8"
            delay={0.2}
            fillWidth
            horizontal="start"
            paddingBottom="m"
          >
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="heading-default-xl"
            >
              {home.subline}
            </Text>
          </RevealFx>

          <RevealFx
            translateY="12"
            delay={0.3}
            fillWidth
            horizontal="start"
            paddingBottom="l"
          >
            <Flex direction="column" gap="16">
              <Heading variant="heading-strong-m">Research Funding</Heading>
              <Text
                wrap="balance"
                onBackground="neutral-weak"
                variant="body-default-s"
              >
                {home.funding}
              </Text>
            </Flex>
          </RevealFx>

          <RevealFx translateY="16" delay={0.4} horizontal="start">
            <Button
              id="team"
              data-border="rounded"
              href="/team"
              variant="secondary"
              size="m"
              arrowIcon
            >
              <Flex gap="8" vertical="center">
                <Avatar
                  style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }}
                  src={team.principalInvestigator.avatar}
                  size="m"
                />
                {team.title}
              </Flex>
            </Button>
          </RevealFx>

          <RevealFx
            translateY="16"
            delay={0.5}
            fillWidth
            horizontal="center"
            paddingY="l"
          >
            <img
              src="/images/images-previous/research_funding_logos6.png"
              alt="Research Funding Logos"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </RevealFx>

          <RevealFx
            translateY="16"
            delay={0.6}
            fillWidth
            horizontal="center"
            paddingY="l"
          >
            <HomeCarousel />
          </RevealFx>
        </Column>
      </Column>
      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx>
      <Projects range={[2]} />
    </Column>
  );
}