"use client";

import styled from "styled-components";
import React from "react";
import { Button } from "@/app/components/Button";
import { useRouter } from "next/navigation";
import { StyledParagraph } from "@/app/components/StyledParagraph";
import { useCookiesContext } from "@/app/CookiesProvider";

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-self: center;
  width: min(100%, ${1100 / 16}rem);
  padding: 16px 32px;

  @media ${(props) => props.theme.queries.phoneAndSmaller} {
    padding: 8px 16px;
  }
`;

const Paragraph = styled(StyledParagraph)`
  color: ${(props) => props.theme.colors.grey[500]};

  @media ${(props) => props.theme.queries.prefersDarkTheme} {
    color: ${(props) => props.theme.colors.grey[400]};
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0 -12px;
`;

export const Footer = ({ currentYear }: { currentYear: number }) => {
  const router = useRouter();
  const { setPreferencesOpen } = useCookiesContext();

  return (
    <Wrapper>
      <Paragraph>&copy; {currentYear} Knut Valen</Paragraph>
      <Links>
        <Button
          size={"small"}
          variant={"text"}
          onClick={() => router.push("/privacy-policy")}
        >
          Privacy policy
        </Button>
        <Button
          size={"small"}
          variant={"text"}
          onClick={() => setPreferencesOpen(true)}
        >
          Cookie preferences
        </Button>
      </Links>
    </Wrapper>
  );
};
