"use client";

import {
  Heading,
  Text,
  Column,
  Row,
  Icon,
  RevealFx,
} from "@once-ui-system/core";
import { activeThemeUi } from "@/resources";

export default function QrCodePage() {
  const hoverTranslateY = activeThemeUi.flatCards ? "translateY(-2px)" : "translateY(-6px)";
  const hoverShadow = activeThemeUi.flatCards
    ? "0 8px 18px rgba(24, 31, 38, 0.08)"
    : "0 20px 40px rgba(0,0,0,0.15)";

  return (
    <Column
      maxWidth="m"
      gap="xl"
      paddingY="12"
      horizontal="center"
      style={{ margin: "0 auto", minHeight: "80vh", justifyContent: "center" }}
    >
      <RevealFx translateY="4" fillWidth horizontal="center">
        <Column horizontal="center" gap="m" paddingBottom="32">
          <Heading variant="display-strong-l" wrap="balance" align="center">
            Mes Documents
          </Heading>
        </Column>
      </RevealFx>

      <RevealFx translateY="8" delay={0.2} fillWidth>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "48px",
            width: "100%",
          }}
        >
          {/* Curriculum Vitae */}
          <div
            onClick={() => {
              fetch("/documents/CV-LOIC-SAINTON.pdf", { method: "HEAD" })
                .then((res) => {
                  if (res.ok) window.open("/documents/CV-LOIC-SAINTON.pdf", "_blank");
                })
                .catch(() => {});
            }}
            style={{ textDecoration: "none", display: "flex" }}
          >
            <Column
              horizontal="center"
              align="center"
              gap="m"
              padding="xl"
              radius="xl"
              border={activeThemeUi.flatCards ? "neutral-alpha-medium" : "neutral-alpha-weak"}
              background={activeThemeUi.flatCards ? "page" : "surface"}
              fillWidth
              style={{
                cursor: "pointer",
                transition: "all 0.3s ease",
                height: 280,
                justifyContent: "center",
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.transform = hoverTranslateY;
                e.currentTarget.style.boxShadow = hoverShadow;
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <Icon
                name="document"
                size="xl"
                onBackground="brand-strong"
              />
              <Heading variant="heading-strong-l" align="center">
                Curriculum Vitae
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-weak" align="center">
                Consulter mon CV au format PDF
              </Text>
              <Row
                gap="8"
                vertical="center"
                padding="m"
                radius="l"
                background="brand-alpha-weak"
                style={{ marginTop: 8 }}
              >
                <Icon name="download" size="s" />
                <Text variant="label-strong-m">Consulter CV</Text>
              </Row>
            </Column>
          </div>

          {/* Lettre de Motivation */}
          <div
            onClick={() => {
              fetch("/documents/LM-LOIC-SAINTON.pdf", { method: "HEAD" })
                .then((res) => {
                  if (res.ok) window.open("/documents/LM-LOIC-SAINTON.pdf", "_blank");
                })
                .catch(() => {});
            }}
            style={{ textDecoration: "none", display: "flex" }}
          >
            <Column
              horizontal="center"
              align="center"
              gap="m"
              padding="xl"
              radius="xl"
              border={activeThemeUi.flatCards ? "neutral-alpha-medium" : "neutral-alpha-weak"}
              background={activeThemeUi.flatCards ? "page" : "surface"}
              fillWidth
              style={{
                cursor: "pointer",
                transition: "all 0.3s ease",
                height: 280,
                justifyContent: "center",
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.transform = hoverTranslateY;
                e.currentTarget.style.boxShadow = hoverShadow;
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <Icon
                name="document"
                size="xl"
                onBackground="brand-strong"
              />
              <Heading variant="heading-strong-l" align="center">
                Lettre de Motivation
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-weak" align="center">
                Consulter ma lettre au format PDF
              </Text>
              <Row
                gap="8"
                vertical="center"
                padding="m"
                radius="l"
                background="brand-alpha-weak"
                style={{ marginTop: 8 }}
              >
                <Icon name="download" size="s" />
                <Text variant="label-strong-m">Consulter LM</Text>
              </Row>
            </Column>
          </div>
        </div>
      </RevealFx>
    </Column>
  );
}
