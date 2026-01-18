"use client";

import { Tag, Column } from "@once-ui-system/core";
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

    const third = Math.ceil(skills.length / 3);
    const firstThird = skills.slice(0, third);
    const secondThird = skills.slice(third, third * 2);
    const thirdThird = skills.slice(third * 2);

    return (
        <>
            <Column s={{ hide: true }} fillWidth gap="m">
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
            </Column>
            <Column hide s={{ hide: false }} fillWidth gap="m">
                <ScrollLoop
                    items={firstThird}
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
                    items={secondThird}
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
                <ScrollLoop
                    items={thirdThird}
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
            </Column>
        </>
    );
}
