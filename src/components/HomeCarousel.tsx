"use client";

import { Flex, RevealFx, SmartImage } from "@/once-ui/components";
import { useEffect, useState, useRef } from "react";

interface HomeCarouselProps {
  className?: string;
}

export const HomeCarousel: React.FC<HomeCarouselProps> = ({ className }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const homeImages = [
    {
      src: "/images/images-previous/homeImg1.png",
      alt: "Autonomous Underwater Vehicle Research",
    },
    {
      src: "/images/images-previous/homeImg2.png",
      alt: "Evolutionary Robotics Research",
    },
    {
      src: "/images/images-previous/homeImg3.png",
      alt: "AI-Powered 3D Printing Research",
    },
    {
      src: "/images/images-previous/homeImg4.png",
      alt: "Smart Building Energy Management",
    },
  ];

  const handleImageClick = () => {
    if (homeImages.length > 1) {
      const nextIndex = (activeIndex + 1) % homeImages.length;
      handleControlClick(nextIndex);
    }
  };

  const handleControlClick = (nextIndex: number) => {
    if (nextIndex !== activeIndex && !transitionTimeoutRef.current) {
      setIsTransitioning(false);

      transitionTimeoutRef.current = setTimeout(() => {
        setActiveIndex(nextIndex);

        setTimeout(() => {
          setIsTransitioning(true);
          transitionTimeoutRef.current = undefined;
        }, 300);
      }, 800);
    }
  };

  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  if (homeImages.length === 0) {
    return null;
  }

  return (
    <Flex fillWidth gap="12" direction="column" className={className}>
      <RevealFx
        onClick={handleImageClick}
        fillWidth
        trigger={true}
        translateY="16"
        speed="fast"
      >
        <img
          alt={homeImages[activeIndex]?.alt}
          src={homeImages[activeIndex]?.src}
          style={{
            maxWidth: "100%",
            height: "auto",
            objectFit: "contain",
            borderRadius: "8px",
            cursor: homeImages.length > 1 ? "pointer" : "default",
          }}
        />
      </RevealFx>
      
      {homeImages.length > 1 && (
        <Flex gap="4" paddingX="s" fillWidth horizontal="center">
          {homeImages.map((_, index) => (
            <Flex
              key={index}
              onClick={() => handleControlClick(index)}
              style={{
                background:
                  activeIndex === index
                    ? "var(--neutral-on-background-strong)"
                    : "var(--neutral-alpha-medium)",
                transition: "background 0.3s ease",
              }}
              cursor="interactive"
              fillWidth
              height="2"
            ></Flex>
          ))}
        </Flex>
      )}
    </Flex>
  );
}; 