"use client";

import { StyledMain } from "@/app/components/StyledMain";
import { StyledHeading1 } from "@/app/components/StyledHeading1";
import { Posts } from "@/app/composistions/Posts";

export const Main = () => {
  return (
    <StyledMain>
      <StyledHeading1>Blog</StyledHeading1>
      <Posts />
    </StyledMain>
  );
};
