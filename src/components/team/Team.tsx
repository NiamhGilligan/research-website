import {
  Card,
  Flex,
  Heading,
  Text,
  SmartLink,
  Avatar,
  Badge,
} from "@/once-ui/components";
import { team } from "@/app/resources/content";
import styles from "./Team.module.scss";

export const Team = () => {
  return (
    <Flex direction="column" gap="48">
      {/* Principal Investigator Section */}
      <Flex direction="column" gap="24">
        <Heading variant="display-strong-s">{team.title}</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          {team.description}
        </Text>
      </Flex>

      {/* Principal Investigator */}
      <Card padding="32">
        <Flex direction="column" gap="24">
          <Flex gap="24" mobileDirection="column">
            <Avatar src={team.principalInvestigator.avatar} size="xl" />
            <Flex direction="column" gap="16" flex={1}>
              <Flex direction="column" gap="8">
                <Heading variant="heading-strong-l">
                  {team.principalInvestigator.name}
                </Heading>
                <Badge>{team.principalInvestigator.title}</Badge>
                <Text variant="body-default-s" onBackground="neutral-strong">
                  {team.principalInvestigator.position}
                </Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {team.principalInvestigator.institution}
                </Text>
              </Flex>

              <Flex gap="16" wrap>
                {team.principalInvestigator.profiles.map((profile, index) => (
                  <SmartLink
                    key={index}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {profile.name}
                  </SmartLink>
                ))}
              </Flex>
            </Flex>
          </Flex>

          <Flex direction="column" gap="16">
            <Text variant="body-default-s">
              {team.principalInvestigator.bio}
            </Text>

            {team.principalInvestigator.background.map((item, index) => (
              <Text
                key={index}
                variant="body-default-s"
                onBackground="neutral-weak"
              >
                {item}
              </Text>
            ))}

            <Text variant="body-default-s" onBackground="neutral-strong">
              <strong>Research Focus:</strong>{" "}
              {team.principalInvestigator.research}
            </Text>
          </Flex>
        </Flex>
      </Card>

      {/* Team Members Sections */}
      <Flex direction="column" gap="32">
        {/* Postdoctoral Researchers */}
        <Flex direction="column" gap="16">
          <Heading variant="heading-strong-m">Postdoctoral Researchers</Heading>
          <Flex direction="column" gap="12">
            {team.postdoctoralResearchers.map((researcher, index) => (
              <Card key={index} padding="16">
                <Flex direction="column" gap="8">
                  <Text variant="body-default-s" onBackground="neutral-strong">
                    <strong>{researcher.name}</strong>
                  </Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {researcher.period} • Funder: {researcher.funder}
                  </Text>
                </Flex>
              </Card>
            ))}
          </Flex>
        </Flex>

        {/* Affiliated Researchers */}
        <Flex direction="column" gap="16">
          <Heading variant="heading-strong-m">Affiliated Researchers</Heading>
          <Flex direction="column" gap="12">
            {team.affiliatedResearchers.map((researcher, index) => (
              <Card key={index} padding="16">
                <Flex direction="column" gap="8">
                  <Text variant="body-default-s" onBackground="neutral-strong">
                    <strong>{researcher.name}</strong>
                  </Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {researcher.period} • Funder: {researcher.funder}
                  </Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {researcher.affiliation}
                  </Text>
                </Flex>
              </Card>
            ))}
          </Flex>
        </Flex>

        {/* Funded PhD Students */}
        <Flex direction="column" gap="16">
          <Heading variant="heading-strong-m">Funded PhD Students</Heading>
          <Flex direction="column" gap="12">
            {team.fundedPhDStudents.map((student, index) => (
              <Card key={index} padding="16">
                <Flex direction="column" gap="8">
                  <Text variant="body-default-s" onBackground="neutral-strong">
                    <strong>{student.name}</strong>
                  </Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {student.period} • Funder: {student.funder}
                  </Text>
                </Flex>
              </Card>
            ))}
          </Flex>
        </Flex>

        {/* Funded Research Assistants */}
        <Flex direction="column" gap="16">
          <Heading variant="heading-strong-m">
            Funded Research Assistants
          </Heading>
          <Flex direction="column" gap="12">
            {team.fundedResearchAssistants.map((assistant, index) => (
              <Card key={index} padding="16">
                <Flex direction="column" gap="8">
                  <Text variant="body-default-s" onBackground="neutral-strong">
                    <strong>{assistant.name}</strong>
                  </Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {assistant.period} • Funder: {assistant.funder}
                  </Text>
                </Flex>
              </Card>
            ))}
          </Flex>
        </Flex>

        {/* Student Projects */}
        <Flex direction="column" gap="16">
          <Heading variant="heading-strong-m">MSc and BSc Students</Heading>
          <Card padding="16">
            <Text variant="body-default-s">{team.studentProjects}</Text>
          </Card>
        </Flex>
      </Flex>
    </Flex>
  );
};
