"use client";

import {
  Heading,
  Text,
  Column,
  Row,
  Icon,
  RevealFx,
} from "@once-ui-system/core";

export default function QrCodePage() {
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
          <a
            href="/documents/cv.pdf"
            download
            style={{ textDecoration: "none", display: "flex" }}
          >
            <Column
              horizontal="center"
              align="center"
              gap="m"
              padding="xl"
              radius="xl"
              border="neutral-alpha-weak"
              background="surface"
              fillWidth
              style={{
                cursor: "pointer",
                transition: "all 0.3s ease",
                height: 280,
                justifyContent: "center",
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(0,0,0,0.15)";
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
                Télécharger mon CV au format PDF
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
                <Text variant="label-strong-m">Télécharger</Text>
              </Row>
            </Column>
          </a>

          {/* Lettre de Motivation */}
          <a
            href="/documents/lettre-de-motivation.pdf"
            download
            style={{ textDecoration: "none", display: "flex" }}
          >
            <Column
              horizontal="center"
              align="center"
              gap="m"
              padding="xl"
              radius="xl"
              border="neutral-alpha-weak"
              background="surface"
              fillWidth
              style={{
                cursor: "pointer",
                transition: "all 0.3s ease",
                height: 280,
                justifyContent: "center",
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(0,0,0,0.15)";
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
                Télécharger ma lettre au format PDF
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
                <Text variant="label-strong-m">Télécharger</Text>
              </Row>
            </Column>
          </a>
        </div>
      </RevealFx>
    </Column>
  );
}
