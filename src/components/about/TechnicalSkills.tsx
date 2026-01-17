"use client";

import { Tag } from "@once-ui-system/core";
import ScrollLoop from "@/components/about/ScrollLoop";

interface TechnicalSkillsProps {
    skills: Array<{
        title: string;
        icon?: string;
    }>;
}

export default function TechnicalSkills({ skills }: TechnicalSkillsProps) {
    const half = Math.ceil(skills.length / 2);
    const firstHalf = skills.slice(0, half);
    const secondHalf = skills.slice(half);

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <ScrollLoop
                items={firstHalf}
                direction="left"
                renderItem={(skill, key) => (
                    <Tag
                        key={key}
                        size="l"
                        prefixIcon={skill.icon}
                    >
                        {skill.title}
                    </Tag>
                )}
            />
            <ScrollLoop
                items={secondHalf}
                direction="right"
                renderItem={(skill, key) => (
                    <Tag
                        key={key}
                        size="l"
                        prefixIcon={skill.icon}
                    >
                        {skill.title}
                    </Tag>
                )}
            />
        </div>
    );
}
