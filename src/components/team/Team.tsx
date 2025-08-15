import { memo, useMemo } from "react";
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

// Memoized team member card component
const TeamMemberCard = memo(
  ({
    name,
    period,
    funder,
    affiliation,
  }: {
    name: string;
    period: string;
    funder: string;
    affiliation?: string;
  }) => (
    <Card padding="16">
      <Flex direction="column" gap="8">
        <Text variant="body-default-s" onBackground="neutral-strong">
          <strong>{name}</strong>
        </Text>
        <Text variant="body-default-s" onBackground="neutral-weak">
          {period} • Funder: {funder}
        </Text>
        {affiliation && (
          <Text variant="body-default-s" onBackground="neutral-weak">
            {affiliation}
          </Text>
        )}
      </Flex>
    </Card>
  )
);

TeamMemberCard.displayName = "TeamMemberCard";

// Memoized team section component
const TeamSection = memo(
  ({
    title,
    members,
  }: {
    title: string;
    members: Array<{
      name: string;
      period: string;
      funder: string;
      affiliation?: string;
    }>;
  }) => (
    <Flex direction="column" gap="16">
      <Heading variant="heading-strong-m">{title}</Heading>
      <Flex direction="column" gap="12">
        {members.map((member, index) => (
          <TeamMemberCard
            key={`${member.name}-${index}`}
            name={member.name}
            period={member.period}
            funder={member.funder}
            affiliation={member.affiliation}
          />
        ))}
      </Flex>
    </Flex>
  )
);

TeamSection.displayName = "TeamSection";

// Memoized profile links component
const ProfileLinks = memo(
  ({ profiles }: { profiles: Array<{ name: string; url: string }> }) => (
    <Flex gap="16" wrap>
      {profiles.map((profile, index) => (
        <SmartLink
          key={`${profile.name}-${index}`}
          href={profile.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {profile.name}
        </SmartLink>
      ))}
    </Flex>
  )
);

ProfileLinks.displayName = "ProfileLinks";

export const Team = () => {
  // Memoized team data to prevent unnecessary re-renders
  const teamData = useMemo(
    () => ({
      principalInvestigator: team.principalInvestigator,
      postdoctoralResearchers: team.postdoctoralResearchers,
      affiliatedResearchers: team.affiliatedResearchers,
      fundedPhDStudents: team.fundedPhDStudents,
      fundedResearchAssistants: team.fundedResearchAssistants,
      studentProjects: team.studentProjects,
    }),
    []
  );

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
            <Avatar src={teamData.principalInvestigator.avatar} size="xl" />
            <Flex direction="column" gap="16" flex={1}>
              <Flex direction="column" gap="8">
                <Heading variant="heading-strong-l">
                  {teamData.principalInvestigator.name}
                </Heading>
                <Badge>{teamData.principalInvestigator.title}</Badge>
                <Text variant="body-default-s" onBackground="neutral-strong">
                  {teamData.principalInvestigator.position}
                </Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {teamData.principalInvestigator.institution}
                </Text>
              </Flex>

              <ProfileLinks
                profiles={teamData.principalInvestigator.profiles}
              />
            </Flex>
          </Flex>

          <Flex direction="column" gap="16">
            <Text variant="body-default-s">
              {teamData.principalInvestigator.bio}
            </Text>

            {teamData.principalInvestigator.background.map((item, index) => (
              <Text
                key={`background-${index}`}
                variant="body-default-s"
                onBackground="neutral-weak"
              >
                {item}
              </Text>
            ))}

            <Text variant="body-default-s" onBackground="neutral-strong">
              <strong>Research Focus:</strong>{" "}
              {teamData.principalInvestigator.research}
            </Text>
          </Flex>
        </Flex>
      </Card>

      {/* Team Members Sections */}
      <Flex direction="column" gap="32">
        <TeamSection
          title="Postdoctoral Researchers"
          members={teamData.postdoctoralResearchers}
        />

        <TeamSection
          title="Affiliated Researchers"
          members={teamData.affiliatedResearchers}
        />

        <TeamSection
          title="Funded PhD Students"
          members={teamData.fundedPhDStudents}
        />

        <TeamSection
          title="Funded Research Assistants"
          members={teamData.fundedResearchAssistants}
        />

        {/* Student Projects */}
        <Flex direction="column" gap="16">
          <Heading variant="heading-strong-m">MSc and BSc Students</Heading>
          <Card padding="16">
            <Text variant="body-default-s">{teamData.studentProjects}</Text>
          </Card>
        </Flex>
      </Flex>
    </Flex>
  );
};
