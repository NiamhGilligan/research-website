"use client";

import {
  Card,
  Flex,
  Heading,
  Text,
  Badge,
  SmartImage,
  SmartLink,
} from "@/once-ui/components";
import { work } from "@/app/resources/content";
import { useState } from "react";
import styles from "./ResearchProjects.module.scss";

export const ResearchProjects = () => {
  const [selectedProject, setSelectedProject] = useState(work.projects[0]);

  return (
    <Flex gap="32" mobileDirection="column">
      {/* Quick Navigation Sidebar */}
      <Flex direction="column" gap="16" className={styles.sidebar}>
        <Heading variant="heading-strong-s">Quick Navigation</Heading>
        <Flex direction="column" gap="8">
          {work.projects.map((project) => (
            <SmartLink
              key={project.id}
              href={`#${project.id}`}
              onClick={(e) => {
                e.preventDefault();
                setSelectedProject(project);
              }}
              className={`${styles.navLink} ${
                selectedProject.id === project.id ? styles.active : ""
              }`}
            >
              <Text variant="body-default-s">{project.title}</Text>
            </SmartLink>
          ))}
        </Flex>
      </Flex>

      {/* Project Content */}
      <Flex direction="column" gap="32" flex={1}>
        <Flex direction="column" gap="16">
          <Heading variant="display-strong-s">{work.title}</Heading>
          <Text variant="body-default-l" onBackground="neutral-weak">
            {work.description}
          </Text>
        </Flex>

        {/* Selected Project Display */}
        <Card padding="32">
          <Flex direction="column" gap="24">
            {/* Project Header */}
            <Flex direction="column" gap="16">
              <Flex direction="column" gap="8">
                <Heading variant="heading-strong-l">
                  {selectedProject.title}
                </Heading>
                <Text variant="body-default-s" onBackground="neutral-strong">
                  {selectedProject.subtitle}
                </Text>
              </Flex>

              <Flex gap="12" wrap>
                <Badge>{selectedProject.status}</Badge>
                <Badge>{selectedProject.funding}</Badge>
                {selectedProject.award && (
                  <Badge>{selectedProject.award}</Badge>
                )}
                {selectedProject.publication && (
                  <Badge>{selectedProject.publication}</Badge>
                )}
                {selectedProject.collaboration && (
                  <Badge>{selectedProject.collaboration}</Badge>
                )}
              </Flex>
            </Flex>

            {/* Project Description */}
            <Flex direction="column" gap="16">
              <Text variant="body-default-s">
                {selectedProject.description}
              </Text>

              <Flex direction="column" gap="12">
                <Heading variant="heading-strong-s">Key Details</Heading>
                <Flex direction="column" gap="8">
                  {selectedProject.details.map((detail, index) => (
                    <Text
                      key={index}
                      variant="body-default-s"
                      onBackground="neutral-weak"
                    >
                      • {detail}
                    </Text>
                  ))}
                </Flex>
              </Flex>
            </Flex>

            {/* Technologies */}
            <Flex direction="column" gap="12">
              <Heading variant="heading-strong-s">Technologies</Heading>
              <Flex gap="8" wrap>
                {selectedProject.technologies.map((tech, index) => (
                  <Badge key={index}>{tech}</Badge>
                ))}
              </Flex>
            </Flex>

            {/* Project Images */}
            {selectedProject.images && selectedProject.images.length > 0 && (
              <Flex direction="column" gap="16">
                <Heading variant="heading-strong-s">Project Images</Heading>
                <Flex gap="16" wrap>
                  {selectedProject.images.map((image, index) => (
                    <Flex
                      key={index}
                      direction="column"
                      gap="8"
                      className={styles.imageContainer}
                    >
                      <SmartImage
                        src={image.src}
                        alt={image.alt}
                        width={800}
                        height={400}
                        className={`${styles.projectImage} ${
                          image.src.includes("EvoRobotArm2")
                            ? styles.evoRobotArm
                            : ""
                        } ${
                          image.src.includes("sfi_logo") ? styles.sfiLogo : ""
                        } ${
                          image.src.includes("ria") || image.src.includes("RIA")
                            ? styles.riaFunding
                            : ""
                        } ${
                          image.src.includes("GB") ||
                          image.src.includes("gb") ||
                          image.src.includes("Energy") ||
                          image.src.includes("energy")
                            ? styles.gbMap
                            : ""
                        } ${
                          image.src.includes("Poker") ||
                          image.src.includes("poker") ||
                          image.src.includes("Texas") ||
                          image.src.includes("texas")
                            ? styles.pokerSimulator
                            : ""
                        } ${
                          image.src.includes("Smart") ||
                          image.src.includes("smart") ||
                          image.src.includes("Home") ||
                          image.src.includes("home") ||
                          image.src.includes("Building") ||
                          image.src.includes("building")
                            ? styles.smartHome
                            : ""
                        }`}
                      />
                      {image.caption && (
                        <Text
                          variant="body-default-s"
                          onBackground="neutral-weak"
                        >
                          {image.caption}
                        </Text>
                      )}
                    </Flex>
                  ))}
                </Flex>
              </Flex>
            )}
          </Flex>
        </Card>

        {/* All Projects List */}
        <Flex direction="column" gap="24">
          <Heading variant="heading-strong-l">All Research Projects</Heading>
          <Flex direction="column" gap="16">
            {work.projects.map((project) => (
              <Card
                key={project.id}
                padding="24"
                className={styles.projectCard}
                onClick={() => {
                  setSelectedProject(project);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                style={{ cursor: "pointer" }}
              >
                <Flex direction="column" gap="16">
                  <Flex direction="column" gap="8">
                    <Heading variant="heading-strong-m">
                      {project.title}
                    </Heading>
                    <Text
                      variant="body-default-s"
                      onBackground="neutral-strong"
                    >
                      {project.subtitle}
                    </Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {project.description}
                    </Text>
                  </Flex>

                  <Flex gap="8" wrap>
                    <Badge>{project.status}</Badge>
                    <Badge>{project.funding}</Badge>
                    {project.award && <Badge>{project.award}</Badge>}
                  </Flex>

                  <Flex gap="8" wrap>
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <Badge key={index}>{tech}</Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge>+{project.technologies.length - 4} more</Badge>
                    )}
                  </Flex>
                </Flex>
              </Card>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
