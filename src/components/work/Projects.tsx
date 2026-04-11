import { getPosts } from "@/utils/utils";
import { ProjectCard } from "@/components";
import styles from "./Projects.module.scss";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
  compact?: boolean;
  columns?: 1 | 2;
}

export function Projects({ range, exclude, compact = false, columns = 1 }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  // Exclude by slug (exact match)
  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.metadata.publishedAt || 0).getTime() - new Date(a.metadata.publishedAt || 0).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  const gridClassName = [
    styles.projectsGrid,
    columns === 2 ? styles.twoColumns : "",
    compact ? styles.compact : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={gridClassName}>
      {displayedProjects.map((post, index) => (
        <div key={post.slug} className={styles.projectItem}>
          <ProjectCard
            priority={index < 3}
            href={`/work/${post.slug}`}
            images={post.metadata.images}
            title={post.metadata.title}
            description={post.metadata.summary}
            content={post.content}
            avatars={post.metadata.team?.filter((member) => member.avatar).map((member) => ({ src: member.avatar })) || []}
            link={post.metadata.link || ""}
            github={post.metadata.github || ""}
            imageFit={post.metadata.imageFit}
            compact={compact}
          />
        </div>
      ))}
    </div>
  );
}
