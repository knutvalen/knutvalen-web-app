"use client";

import { StyledMain } from "@/app/components/StyledMain";
import { StyledHeading1 } from "@/app/components/StyledHeading1";
import { Posts } from "@/app/composistions/Posts";
import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Page = () => {
  return (
    <Wrapper>
      <StyledMain>
        <StyledHeading1>Blog</StyledHeading1>
        <Posts />
      </StyledMain>
    </Wrapper>
  );
};

export default Page;
