"use client";

import styled from "styled-components";
import React from "react";
import { StyledParagraph } from "@/app/components/StyledParagraph";

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
`;

const Paragraph = styled(StyledParagraph)`
  width: min(100%, ${1100 / 16}rem);
  font-size: ${14 / 16}rem;
  padding: 16px 32px;

  @media ${(props) => props.theme.queries.phoneAndSmaller} {
    padding: 8px 16px;
  }
`;

export const Footer = ({ currentYear }: { currentYear: number }) => {
  return (
    <Wrapper>
      <Paragraph>© {currentYear} Knut Valen. All rights reserved.</Paragraph>
    </Wrapper>
  );
};
