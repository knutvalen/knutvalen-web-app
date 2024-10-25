"use client";
import { use } from "react";

import { getBlogPostComponent, getMetadata, Props } from "@/app/api/BlogApi";
import styled from "styled-components";
import { StyledParagraph } from "@/app/components/StyledParagraph";
import { StyledMain } from "@/app/components/StyledMain";
import { StyledHeading1 } from "@/app/components/StyledHeading1";

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const H1Wrapper = styled.div`
  padding-bottom: 32px;

  @media ${(props) => props.theme.queries.phoneAndSmaller} {
    padding-bottom: 16px;
  }
`;

const SubHeading1 = styled(StyledParagraph)`
  font-weight: ${(props) => props.theme.weights.mediumSmall};
`;

const Page = (props: { params: Promise<{ slug: Props["slug"] }> }) => {
  const params = use(props.params);
  const metadata = getMetadata({ slug: params.slug });
  const Component = getBlogPostComponent({ slug: metadata.slug });

  return (
    <Wrapper>
      <StyledMain>
        <H1Wrapper>
          <StyledHeading1>{metadata.title}</StyledHeading1>
          <SubHeading1>
            {metadata.published.toLocaleDateString("en", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </SubHeading1>
        </H1Wrapper>
        <Component />
      </StyledMain>
    </Wrapper>
  );
};

export default Page;
