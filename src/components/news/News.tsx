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
import { news } from "@/app/resources/content";
import { useState } from "react";
import styles from "./News.module.scss";

export const News = () => {
  const [selectedNewsItem, setSelectedNewsItem] = useState(news.newsItems[0]);
  const [selectedCategory, setSelectedCategory] = useState("All News");
  const [selectedYear, setSelectedYear] = useState("All Years");

  // Get unique categories for navigation
  const categories = [...new Set(news.newsItems.map((item) => item.category))];

  // Get unique years from news items
  const years = [
    ...new Set(
      news.newsItems.map((item) => {
        const year = item.date.match(/\d{4}/);
        return year ? year[0] : "Unknown";
      })
    ),
  ].sort((a, b) => parseInt(b) - parseInt(a)); // Sort years descending

  // Filter news items based on selected category and year
  const filteredNewsItems = news.newsItems.filter((item) => {
    const itemYear = item.date.match(/\d{4}/)?.[0] || "Unknown";
    const categoryMatch =
      selectedCategory === "All News" || item.category === selectedCategory;
    const yearMatch = selectedYear === "All Years" || itemYear === selectedYear;
    return categoryMatch && yearMatch;
  });

  // Utility function to determine image styling based on filename
  const getImageStyleClass = (imageSrc: string) => {
    const src = imageSrc.toLowerCase();

    // Specific image types with known aspect ratios
    if (src.includes("ncf-ribbon-2024")) return styles.ncfRibbon;
    if (src.includes("icccsp-2024-keynote")) return styles.icccspKeynote;
    if (src.includes("junlin_iet_smartgrid")) return styles.ietSmartGrid;
    if (src.includes("springerevostar23")) return styles.springerEvoStar;
    if (src.includes("ker_journal")) return styles.kerJournal;
    if (src.includes("brl_img")) return styles.brlImage;
    if (src.includes("ria-black")) return styles.riaImage;

    // Default styling for other images
    return styles.defaultImage;
  };

  return (
    <Flex gap="32" mobileDirection="column">
      {/* Quick Navigation Sidebar */}
      <Flex direction="column" gap="16" className={styles.sidebar}>
        <Heading variant="heading-strong-s">Quick Navigation</Heading>

        {/* Category Filter */}
        <Flex direction="column" gap="8">
          <Text variant="body-default-s" onBackground="neutral-strong">
            Categories
          </Text>
          <SmartLink
            href="#all"
            onClick={(e) => {
              e.preventDefault();
              setSelectedCategory("All News");
              setSelectedNewsItem(news.newsItems[0]);
            }}
            className={`${styles.navLink} ${
              selectedCategory === "All News" ? styles.active : ""
            }`}
          >
            <Text variant="body-default-s">All News</Text>
          </SmartLink>
          {categories.map((category) => (
            <SmartLink
              key={category}
              href={`#${category}`}
              onClick={(e) => {
                e.preventDefault();
                setSelectedCategory(category);
                const firstItemInCategory = news.newsItems.find(
                  (item) => item.category === category
                );
                if (firstItemInCategory) {
                  setSelectedNewsItem(firstItemInCategory);
                }
              }}
              className={`${styles.navLink} ${
                selectedCategory === category ? styles.active : ""
              }`}
            >
              <Text variant="body-default-s">{category}</Text>
            </SmartLink>
          ))}
        </Flex>

        {/* Year Filter */}
        <Flex direction="column" gap="8">
          <Text variant="body-default-s" onBackground="neutral-strong">
            Years
          </Text>
          <SmartLink
            href="#all-years"
            onClick={(e) => {
              e.preventDefault();
              setSelectedYear("All Years");
              setSelectedNewsItem(news.newsItems[0]);
            }}
            className={`${styles.navLink} ${
              selectedYear === "All Years" ? styles.active : ""
            }`}
          >
            <Text variant="body-default-s">All Years</Text>
          </SmartLink>
          {years.map((year) => (
            <SmartLink
              key={year}
              href={`#${year}`}
              onClick={(e) => {
                e.preventDefault();
                setSelectedYear(year);
                const firstItemInYear = news.newsItems.find(
                  (item) => item.date.match(/\d{4}/)?.[0] === year
                );
                if (firstItemInYear) {
                  setSelectedNewsItem(firstItemInYear);
                }
              }}
              className={`${styles.navLink} ${
                selectedYear === year ? styles.active : ""
              }`}
            >
              <Text variant="body-default-s">{year}</Text>
            </SmartLink>
          ))}
        </Flex>
      </Flex>

      {/* News Content */}
      <Flex direction="column" gap="32" flex={1}>
        <Flex direction="column" gap="16">
          <Heading variant="display-strong-s">{news.title}</Heading>
          <Text variant="body-default-l" onBackground="neutral-weak">
            {news.description}
          </Text>
        </Flex>

        {/* Selected News Item Display */}
        <Card padding="32">
          <Flex direction="column" gap="24">
            {/* News Header */}
            <Flex direction="column" gap="16">
              <Flex direction="column" gap="8">
                <Heading variant="heading-strong-l">
                  {selectedNewsItem.title}
                </Heading>
                <Text variant="body-default-s" onBackground="neutral-strong">
                  {selectedNewsItem.date}
                </Text>
              </Flex>
              <Flex gap="12" wrap>
                <Badge>{selectedNewsItem.category}</Badge>
                {selectedNewsItem.featured && <Badge>Featured</Badge>}
              </Flex>
            </Flex>

            {/* News Content */}
            <Flex direction="column" gap="16">
              <Text variant="body-default-s">{selectedNewsItem.content}</Text>
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
                    <Heading variant="heading-strong-m">{item.title}</Heading>
                    <Text
                      variant="body-default-s"
                      onBackground="neutral-strong"
                    >
                      {item.date}
                    </Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">
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
