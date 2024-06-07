"use client";

import styled from "styled-components";
import { ReactNode } from "react";
import React from "react";
import { StyledParagraph } from "@/app/components/StyledParagraph";
import { useRouter } from "next/navigation";
import { Button } from "@/app/components/Button";
import { StyledHeading2 } from "@/app/components/StyledHeading2";
import { StyledCard } from "@/app/components/StyledCard";
import { getMetadataForAllBlogPosts, Props } from "@/app/api/BlogApi";

const Wrapper = styled.div`
  display: grid;
  gap: 48px;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  margin: 0 -16px;

  @media ${(props) => props.theme.queries.phoneAndSmaller} {
    margin: 0 -8px;
    gap: 32px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex: 1;
`;

export const Posts = () => {
  const router = useRouter();
  const blogList: Array<ReactNode> = [];
  const posts = getMetadataForAllBlogPosts();

  const onClick = (component: Props["slug"]) => {
    router.push(`/blog/${component}`);
  };

  for (const blogPost of posts) {
    blogList.push(
      <StyledCard key={blogPost.slug}>
        <StyledHeading2>{blogPost.title}</StyledHeading2>
        <StyledParagraph>{blogPost.introduction}</StyledParagraph>
        <ButtonWrapper>
          <Button
            onClick={() => onClick(blogPost.slug)}
            variant={"contained"}
            size={"medium"}
          >
            Read more
          </Button>
        </ButtonWrapper>
      </StyledCard>,
    );
  }

  return <Wrapper>{blogList}</Wrapper>;
};
