import { notFound } from "next/navigation";
import { getPosts } from "@/utils/utils";
import {
  Meta,
  Schema,
  AvatarGroup,
  Column,
  Heading,
  Media,
  Text,
  SmartLink,
  Row,
} from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { ScrollToHash, CustomMDX } from "@/components";
import type { Metadata } from "next";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "work", "projects"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const posts = getPosts(["src", "app", "work", "projects"]);
  const post = posts.find((post) => post.slug === slugPath);

  if (!post) return {};

  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL: baseURL,
    image: post.metadata.image || `/api/og/generate?title=${post.metadata.title}`,
    path: `${work.path}/${post.slug}`,
  });
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const post = getPosts(["src", "app", "work", "projects"]).find((post) => post.slug === slugPath);

  if (!post) {
    notFound();
  }

  const avatars =
    post.metadata.team?.filter((person) => person.avatar).map((person) => ({
      src: person.avatar,
    })) || [];

  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`${work.path}/${post.slug}`}
        title={post.metadata.title}
        description={post.metadata.summary}
        datePublished={post.metadata.publishedAt}
        dateModified={post.metadata.publishedAt}
        image={
          post.metadata.image || `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`
        }
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column maxWidth="s" gap="16" horizontal="center" align="center">
        <SmartLink href="/work">
          <Text variant="label-strong-m">Projets</Text>
        </SmartLink>
        <Heading variant="display-strong-m">{post.metadata.title}</Heading>
      </Column>
      <Row marginBottom="32" horizontal="center" gap="16" vertical="center">
        {post.metadata.team && <AvatarGroup reverse avatars={avatars} size="s" />}
        <Text variant="label-default-m" onBackground="brand-weak">
          {post.metadata.team?.map((member, idx) => (
            <span key={member.name}>
              {idx > 0 && (
                <Text as="span" onBackground="neutral-weak">
                  ,{" "}
                </Text>
              )}
              <SmartLink href={member.linkedIn}>{member.name}</SmartLink>
            </span>
          ))}
        </Text>
        {post.metadata.github && (
          <SmartLink href={post.metadata.github} suffixIcon="github">
            <Text variant="label-default-m">GitHub</Text>
          </SmartLink>
        )}
      </Row>
      {post.metadata.image && (
        <Media
          priority
          aspectRatio="16 / 9"
          radius="m"
          alt="image"
          src={post.metadata.image}
          style={{ objectFit: (post.metadata.imageFit || "cover") as React.CSSProperties["objectFit"] }}
          border={post.metadata.hideCoverBorder ? "transparent" : undefined}
          background={post.metadata.hideCoverBorder ? "transparent" : undefined}
        />
      )}
      <Column style={{ margin: "auto" }} as="article" maxWidth="xs">
        <CustomMDX source={post.content} />
      </Column>
      <ScrollToHash />
    </Column>
  );
}
