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
import { news } from "@/app/resources/content";
import { useState, useMemo, useCallback } from "react";
import styles from "./News.module.scss";

export const News = () => {
  const [selectedNewsItem, setSelectedNewsItem] = useState(news.newsItems[0]);
  const [selectedCategory, setSelectedCategory] = useState("All News");
  const [selectedYear, setSelectedYear] = useState("All Years");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Memoized helper functions
  const extractYear = useCallback(
    (date: string) => date.match(/\d{4}/)?.[0] || "Unknown",
    []
  );

  const getImageStyleClass = useCallback((imageSrc: string) => {
    const src = imageSrc.toLowerCase();
    const imageStyles = {
      "ncf-ribbon-2024": styles.ncfRibbon,
      "icccsp-2024-keynote": styles.icccspKeynote,
      junlin_iet_smartgrid: styles.ietSmartGrid,
      springerevostar23: styles.springerEvoStar,
      ker_journal: styles.kerJournal,
      brl_img: styles.brlImage,
      "ria-black": styles.riaImage,
    };

    return (
      Object.entries(imageStyles).find(([key]) => src.includes(key))?.[1] ||
      styles.defaultImage
    );
  }, []);

  // Memoized data processing
  const categories = useMemo(
    () => [...new Set(news.newsItems.map((item) => item.category))],
    []
  );

  const years = useMemo(
    () =>
      [...new Set(news.newsItems.map((item) => extractYear(item.date)))].sort(
        (a, b) => parseInt(b) - parseInt(a)
      ),
    [extractYear]
  );

  // Memoized filtered items
  const filteredNewsItems = useMemo(
    () =>
      news.newsItems.filter((item) => {
        const itemYear = extractYear(item.date);
        const categoryMatch =
          selectedCategory === "All News" || item.category === selectedCategory;
        const yearMatch =
          selectedYear === "All Years" || itemYear === selectedYear;
        return categoryMatch && yearMatch;
      }),
    [selectedCategory, selectedYear, extractYear]
  );

  // Optimized filter change handler
  const handleFilterChange = useCallback(
    (newCategory: string, newYear: string) => {
      setSelectedCategory(newCategory);
      setSelectedYear(newYear);

      // Find first item matching new filters
      const firstMatchingItem = news.newsItems.find((item) => {
        const itemYear = extractYear(item.date);
        const categoryMatch =
          newCategory === "All News" || item.category === newCategory;
        const yearMatch = newYear === "All Years" || itemYear === newYear;
        return categoryMatch && yearMatch;
      });

      if (firstMatchingItem) {
        setSelectedNewsItem(firstMatchingItem);
      }

      // Close sidebar on mobile after selection
      setIsSidebarOpen(false);
    },
    [extractYear]
  );

  // Memoized navigation link component
  const NavLink = useCallback(
    ({
      href,
      onClick,
      isActive,
      children,
    }: {
      href: string;
      onClick: () => void;
      isActive: boolean;
      children: React.ReactNode;
    }) => (
      <SmartLink
        href={href}
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
        className={`${styles.navLink} ${isActive ? styles.active : ""}`}
      >
        <Text variant="body-default-s">{children}</Text>
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

        {/* Category Filter */}
        <Flex direction="column" gap="8">
          <Text variant="body-default-s" onBackground="neutral-strong">
            Categories
          </Text>
          <NavLink
            href="#all"
            onClick={() => handleFilterChange("All News", selectedYear)}
            isActive={selectedCategory === "All News"}
          >
            All News
          </NavLink>
          {categories.map((category) => (
            <NavLink
              key={category}
              href={`#${category}`}
              onClick={() => handleFilterChange(category, selectedYear)}
              isActive={selectedCategory === category}
            >
              {category}
            </NavLink>
          ))}
        </Flex>

        {/* Year Filter */}
        <Flex direction="column" gap="8">
          <Text variant="body-default-s" onBackground="neutral-strong">
            Years
          </Text>
          <NavLink
            href="#all-years"
            onClick={() => handleFilterChange(selectedCategory, "All Years")}
            isActive={selectedYear === "All Years"}
          >
            All Years
          </NavLink>
          {years.map((year) => (
            <NavLink
              key={year}
              href={`#${year}`}
              onClick={() => handleFilterChange(selectedCategory, year)}
              isActive={selectedYear === year}
            >
              {year}
            </NavLink>
          ))}
        </Flex>
      </Flex>

      {/* News Content */}
      <Flex direction="column" gap="32" flex={1} className={styles.content}>
        <Flex direction="column" gap="16">
          <Heading variant="display-strong-s">{news.title}</Heading>
          <Text variant="body-default-l" onBackground="neutral-weak">
            {news.description}
          </Text>
        </Flex>

        {/* Selected News Item Display */}
        <Card padding="32" className={styles.selectedNewsCard}>
          <Flex direction="column" gap="24">
            {/* News Header */}
            <Flex direction="column" gap="16">
              <Flex direction="column" gap="8">
                <Heading
                  variant="heading-strong-l"
                  className={styles.newsTitle}
                >
                  {selectedNewsItem.title}
                </Heading>
                <Text
                  variant="body-default-s"
                  onBackground="neutral-strong"
                  className={styles.newsTitle}
                >
                  {selectedNewsItem.date}
                </Text>
              </Flex>
              <Flex gap="12" wrap className={styles.newsCategory}>
                <Badge>{selectedNewsItem.category}</Badge>
                {selectedNewsItem.featured && <Badge>Featured</Badge>}
              </Flex>
            </Flex>

            {/* News Content */}
            <Flex direction="column" gap="16">
              <Text variant="body-default-s" className={styles.newsContent}>
                {selectedNewsItem.content}
              </Text>
              {selectedNewsItem.link && (
                <Flex gap="8" vertical="center">
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    Read more:
                  </Text>
                  <SmartLink
                    href={selectedNewsItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Paper
                  </SmartLink>
                </Flex>
              )}
            </Flex>

            {/* News Image */}
            {selectedNewsItem.image && (
              <Flex direction="column" gap="16">
                <Heading variant="heading-strong-s">Related Image</Heading>
                <Flex
                  direction="column"
                  gap="8"
                  className={styles.imageContainer}
                >
                  <SmartImage
                    src={selectedNewsItem.image.src}
                    alt={selectedNewsItem.image.alt}
                    width={800}
                    height={400}
                    className={`${styles.newsImage} ${getImageStyleClass(
                      selectedNewsItem.image.src
                    )}`}
                  />
                </Flex>
              </Flex>
            )}
          </Flex>
        </Card>

        {/* All News List */}
        <Flex direction="column" gap="24">
          <Flex direction="column" gap="8">
            <Heading variant="heading-strong-l">
              {selectedCategory === "All News" && selectedYear === "All Years"
                ? "All News"
                : `${
                    selectedCategory === "All News"
                      ? "All Categories"
                      : selectedCategory
                  } ${selectedYear === "All Years" ? "" : `(${selectedYear})`}`}
            </Heading>
            {(selectedCategory !== "All News" ||
              selectedYear !== "All Years") && (
              <Text variant="body-default-s" onBackground="neutral-weak">
                Showing {filteredNewsItems.length} of {news.newsItems.length}{" "}
                news items
              </Text>
            )}
          </Flex>
          <Flex direction="column" gap="16">
            {filteredNewsItems.map((item) => (
              <Card
                key={item.id}
                padding="24"
                className={styles.newsCard}
                onClick={() => {
                  setSelectedNewsItem(item);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                style={{ cursor: "pointer" }}
              >
                <Flex direction="column" gap="16">
                  <Flex direction="column" gap="8">
                    <Heading
                      variant="heading-strong-m"
                      className={styles.newsTitle}
                    >
                      {item.title}
                    </Heading>
                    <Text
                      variant="body-default-s"
                      onBackground="neutral-strong"
                      className={styles.newsTitle}
                    >
                      {item.date}
                    </Text>
                    <Text
                      variant="body-default-s"
                      onBackground="neutral-weak"
                      className={styles.newsContent}
                    >
                      {item.content.length > 200
                        ? `${item.content.substring(0, 200)}...`
                        : item.content}
                    </Text>
                  </Flex>
                  <Flex gap="8" wrap>
                    <Badge>{item.category}</Badge>
                    {item.featured && <Badge>Featured</Badge>}
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
