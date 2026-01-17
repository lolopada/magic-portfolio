import { Column, Row, Text } from "@once-ui-system/core";

interface TimelineDetail {
    icon?: string;
    label: string;
    value: string;
}

interface TimelineItemProps {
    name: string;
    description: React.ReactNode;
    isLast?: boolean;
    details?: TimelineDetail[];
}

export default function Timeline({ items }: { items: TimelineItemProps[] }) {
    return (
        <Column fillWidth gap="40">
            {items.map((item, index) => (
                <Row key={`${item.name}-${index}`} fillWidth gap="24">
                    {/* Timeline Track (Left) */}
                    <Column horizontal="center" position="relative" style={{ width: "24px" }}>
                        {/* Vertical Line */}
                        {!item.isLast && (
                            <div
                                style={{
                                    position: "absolute",
                                    top: "24px",
                                    bottom: "-40px",
                                    width: "2px",
                                    background: "linear-gradient(180deg, #24c6dc 0%, #514a9d 100%)",
                                    zIndex: 0,
                                    opacity: 0.6,
                                }}
                            />
                        )}
                        {/* Dot avec glow */}
                        <div
                            style={{
                                width: "12px",
                                height: "12px",
                                borderRadius: "50%",
                                background: "linear-gradient(135deg, #24c6dc, #514a9d)",
                                zIndex: 1,
                                boxShadow: "0 0 16px rgba(36, 198, 220, 0.5)",
                                marginTop: "8px",
                                flexShrink: 0,
                            }}
                        />
                    </Column>

                    {/* Content (Right) */}
                    <Column flex={1} gap="8">
                        {/* Titre avec effet dégradé */}
                        <Text
                            variant="heading-strong-l"
                            align="left"
                            className="gradient-timeline-title"
                        >
                            {item.name}
                        </Text>

                        {/* Lieu et date */}
                        <Text
                            variant="body-default-s"
                            onBackground="neutral-weak"
                            align="left"
                        >
                            {item.description}
                        </Text>

                        {/* Details inline */}
                        {item.details && item.details.length > 0 && (
                            <Column gap="4" marginTop="8">
                                {item.details.map((detail, detailIndex) => (
                                    <Row
                                        key={`${item.name}-detail-${detailIndex}`}
                                        vertical="center"
                                        wrap
                                    >
                                        <Text
                                            variant="label-strong-s"
                                            onBackground="brand-medium"
                                        >
                                            {detail.label}
                                        </Text>
                                        <Text
                                            variant="body-default-s"
                                            onBackground="neutral-medium"
                                        >
                                            - {detail.value}
                                        </Text>
                                    </Row>
                                ))}
                            </Column>
                        )}
                    </Column>
                </Row>
            ))}
        </Column>
    );
}
