"use client";

import {
  Card,
  Flex,
  Heading,
  Text,
  Badge,
  SmartImage,
  SmartLink,
  Button,
} from "@/once-ui/components";
import { work } from "@/app/resources/content";
import { useState, useCallback } from "react";
import styles from "./ResearchProjects.module.scss";

export const ResearchProjects = () => {
  const [selectedProject, setSelectedProject] = useState(work.projects[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Memoized utility function to determine image styling based on filename
  const getImageStyleClass = useCallback((imageSrc: string) => {
    const src = imageSrc.toLowerCase();
    const imageStyles = {
      evorobotarm2: styles.evoRobotArm,
      sfi_logo: styles.sfiLogo,
      ria: styles.riaFunding,
      gb: styles.gbMap,
      energy: styles.gbMap,
      poker: styles.pokerSimulator,
      texas: styles.pokerSimulator,
      smart: styles.smartHome,
      home: styles.smartHome,
      building: styles.smartHome,
      aiprint: styles.aiPrint,
    };

    return (
      Object.entries(imageStyles).find(([key]) => src.includes(key))?.[1] || ""
    );
  }, []);

  const handleProjectSelect = useCallback(
    (project: (typeof work.projects)[0]) => {
      setSelectedProject(project);
      window.scrollTo({ top: 0, behavior: "smooth" });
      // Close sidebar on mobile after selection
      setIsSidebarOpen(false);
    },
    []
  );

  // Memoized navigation link component
  const NavLink = useCallback(
    ({
      project,
      isActive,
    }: {
      project: (typeof work.projects)[0];
      isActive: boolean;
    }) => (
      <SmartLink
        href={`#${project.id}`}
        onClick={(e) => {
          e.preventDefault();
          setSelectedProject(project);
        }}
        className={`${styles.navLink} ${isActive ? styles.active : ""}`}
      >
        <Text variant="body-default-s">{project.title}</Text>
      </SmartLink>
    ),
    []
  );

  return (
    <Flex gap="32" mobileDirection="column">
      {/* Mobile Navigation Toggle - Fixed position for both show/hide */}
      <Flex className={styles.mobileNavToggle}>
        <Button
          variant="secondary"
          size="s"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? "Hide Navigation" : "Show Navigation"}
        </Button>
      </Flex>

      {/* Quick Navigation Sidebar */}
      <Flex
        direction="column"
        gap="16"
        className={`${styles.sidebar} ${
          isSidebarOpen ? styles.sidebarOpen : ""
        }`}
      >
        <Heading variant="heading-strong-s">Quick Navigation</Heading>
        <Flex direction="column" gap="8">
          {work.projects.map((project) => (
            <NavLink
              key={project.id}
              project={project}
              isActive={selectedProject.id === project.id}
            />
          ))}
        </Flex>
      </Flex>

      {/* Project Content */}
      <Flex direction="column" gap="32" flex={1} className={styles.content}>
        <Flex direction="column" gap="16">
          <Heading variant="display-strong-s">{work.title}</Heading>
          <Text variant="body-default-l" onBackground="neutral-weak">
            {work.description}
          </Text>
        </Flex>

        {/* Selected Project Display */}
        <Card padding="24" className={styles.selectedProjectCard}>
          <Flex direction="column" gap="20">
            {/* Project Header */}
            <Flex direction="column" gap="12">
              <Flex direction="column" gap="8">
                <Heading
                  variant="heading-strong-l"
                  className={styles.projectTitle}
                >
                  {selectedProject.title}
                </Heading>
                <Text
                  variant="body-default-s"
                  onBackground="neutral-strong"
                  className={styles.projectTitle}
                >
                  {selectedProject.subtitle}
                </Text>
              </Flex>

              <Flex gap="12" wrap className={styles.projectTechnologies}>
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
            <Flex direction="column" gap="12">
              <Text
                variant="body-default-s"
                className={styles.projectDescription}
              >
                {selectedProject.description}
              </Text>

              <Flex direction="column" gap="8">
                <Heading variant="heading-strong-s">Key Details</Heading>
                <Flex direction="column" gap="8">
                  {selectedProject.details.map((detail, index) => (
                    <Text
                      key={index}
                      variant="body-default-s"
                      onBackground="neutral-weak"
                      className={styles.projectDetails}
                    >
                      • {detail}
                    </Text>
                  ))}
                </Flex>
              </Flex>
            </Flex>

            {/* Technologies */}
            <Flex direction="column" gap="8">
              <Heading variant="heading-strong-s">Technologies</Heading>
              <Flex gap="4" wrap className={styles.projectTechnologies}>
                {selectedProject.technologies.map((tech, index) => (
                  <Badge key={index}>{tech}</Badge>
                ))}
              </Flex>
            </Flex>

            {/* Project Images */}
            {selectedProject.images && selectedProject.images.length > 0 && (
              <Flex direction="column" gap="12">
                <Heading variant="heading-strong-s">Project Images</Heading>
                <Flex gap="12" wrap className={styles.imagesGrid}>
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
                        className={`${styles.projectImage} ${getImageStyleClass(
                          image.src
                        )}`}
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
                onClick={() => handleProjectSelect(project)}
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
