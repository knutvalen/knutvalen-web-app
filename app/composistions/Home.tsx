"use client";

import styled from "styled-components";
import { StyledHeading1 } from "@/app/components/StyledHeading1";
import { StyledMain } from "@/app/components/StyledMain";
import { Posts } from "@/app/composistions/Posts";

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Home = () => {
  return (
    <Wrapper>
      <StyledMain>
        <StyledHeading1>Blog</StyledHeading1>
        <Posts />
      </StyledMain>
    </Wrapper>
  );
};
