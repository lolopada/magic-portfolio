"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@once-ui-system/core";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
  github?: string;
  imageFit?: string;
  compact?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
  github,
  imageFit,
  compact = false,
}) => {
  const hasImages = images.length > 0;
  const headingVariant = compact ? "heading-strong-l" : "heading-strong-xl";
  const bodyVariant = compact ? "body-default-xs" : "body-default-s";
  const carouselSizes = compact ? "(max-width: 960px) 100vw, 520px" : "(max-width: 960px) 100vw, 960px";
  const cardClassName = [
    styles.card,
    compact ? styles.compact : "",
    imageFit ? `image-fit-${imageFit}` : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Column fillWidth gap={compact ? "s" : "m"} className={cardClassName}>
      {hasImages ? (
        <Carousel
          aspectRatio="16 / 9"
          sizes={carouselSizes}
          items={images.map((image) => ({
            slide: image,
            alt: title,
          }))}
        />
      ) : (
        <div className={styles.mediaPlaceholder} aria-hidden="true" />
      )}
      <Flex
        s={{ direction: "column" }}
        fillWidth
        className={styles.content}
        paddingX={compact ? "12" : "s"}
        paddingTop={compact ? "8" : "12"}
        paddingBottom={compact ? "16" : "24"}
        gap={compact ? "m" : "l"}
      >
        {title && (
          <Flex flex={5}>
            <Heading as="h2" wrap="balance" variant={headingVariant}>
              {title}
            </Heading>
          </Flex>
        )}
        {(avatars?.length > 0 || description?.trim() || content?.trim()) && (
          <Column flex={7} gap="16">
            {avatars?.length > 0 && <AvatarGroup avatars={avatars} size={compact ? "s" : "m"} reverse />}
            {description?.trim() && (
              <Text wrap="balance" variant={bodyVariant} onBackground="neutral-weak">
                {description}
              </Text>
            )}
            <Flex fillWidth horizontal="between" vertical="center" gap="24" wrap>
              {content?.trim() && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{ margin: "0", width: "fit-content" }}
                  href={href}
                >
                  <Text variant={bodyVariant}>Plus d'informations</Text>
                </SmartLink>
              )}
              <Flex gap="16">
                {github && (
                  <SmartLink
                    suffixIcon="github"
                    style={{ margin: "0", width: "fit-content" }}
                    href={github}
                  >
                    <Text variant={bodyVariant}>GitHub</Text>
                  </SmartLink>
                )}
                {link && (
                  <SmartLink
                    suffixIcon="arrowUpRightFromSquare"
                    style={{ margin: "0", width: "fit-content" }}
                    href={link}
                  >
                    <Text variant={bodyVariant}>View project</Text>
                  </SmartLink>
                )}
              </Flex>
            </Flex>
          </Column>
        )}
      </Flex>
    </Column>
  );
};
