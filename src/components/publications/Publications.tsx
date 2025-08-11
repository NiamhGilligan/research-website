import { Card, Flex, Heading, Text, SmartLink } from "@/once-ui/components";
import { publications } from "@/app/resources/content";
import styles from "./Publications.module.scss";

export const Publications = () => {
  return (
    <Flex direction="column" gap="32">
      <Flex direction="column" gap="16">
        <Heading variant="display-strong-s">{publications.title}</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          {publications.description}
        </Text>
        {publications.googleScholarUrl && (
          <Flex gap="8" vertical="center">
            <Text variant="body-default-s" onBackground="neutral-weak">
              View full publication list on:
            </Text>
            <SmartLink
              href={publications.googleScholarUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Scholar
            </SmartLink>
          </Flex>
        )}
      </Flex>

      <Flex direction="column" gap="24">
        {publications.publications.map((pub, index) => (
          <Card key={index} padding="24">
            <Flex direction="column" gap="16">
              <Flex direction="column" gap="8">
                <Heading variant="heading-strong-s" as="h3">
                  {pub.title}
                </Heading>
                <Text variant="body-default-s" onBackground="neutral-strong">
                  {pub.authors}
                </Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {pub.year}
                </Text>
              </Flex>

              <Flex direction="column" gap="8">
                <Text variant="body-default-s" onBackground="neutral-strong">
                  <strong>Journal/Conference:</strong> {pub.journal}
                </Text>
                {pub.publisher && (
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    <strong>Publisher:</strong> {pub.publisher}
                  </Text>
                )}
                {pub.volume && pub.pages && (
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    <strong>Volume:</strong> {pub.volume},{" "}
                    <strong>Pages:</strong> {pub.pages}
                  </Text>
                )}
                {pub.doi && (
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    <strong>DOI:</strong> {pub.doi}
                  </Text>
                )}
              </Flex>

              {pub.abstract && (
                <Flex direction="column" gap="8">
                  <Text variant="body-default-s" onBackground="neutral-strong">
                    <strong>Abstract:</strong>
                  </Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {pub.abstract}
                  </Text>
                </Flex>
              )}
            </Flex>
          </Card>
        ))}
      </Flex>
    </Flex>
  );
};
