"use client";

import styled, { keyframes } from "styled-components";
import { Info, Check } from "react-feather";
import { Button } from "@/app/components/Button";
import { setConsentCookie } from "@/app/serverActions";
import { StyledCard } from "@/app/components/StyledCard";
import { StyledHeading2 } from "@/app/components/StyledHeading2";
import { StyledParagraph } from "@/app/components/StyledParagraph";

const delayToDisplay = 1500;

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 64px;
  width: min(100%, 608px);

  @media ${(props) => props.theme.queries.phoneAndSmaller} {
    padding: 0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const slideInFromLeft = keyframes`
  from {
    transform: translateX(-130%);  
  }
  to {
    transform: translateX(0%);
  }
`;

const slideInFromBottom = keyframes`
  from {
    transform: translateY(130%);  
  }
  to {
    transform: translateY(0%);
  }
`;

const Card = styled(StyledCard)`
  box-shadow: ${(props) => props.theme.elevations.large};
  background-color: ${(props) => props.theme.colors.primary.dark};
  will-change: transform;

  animation: ${slideInFromLeft} 500ms ease-out both;
  animation-delay: ${delayToDisplay}ms;

  @media ${(props) => props.theme.queries.phoneAndSmaller} {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    padding: 16px;
    animation: ${slideInFromBottom} 500ms ease-out both;
    animation-delay: ${delayToDisplay}ms;
  }

  @media ${(props) => props.theme.queries.prefersDarkTheme} {
    background-color: ${(props) => props.theme.colors.primary.light};
  }
`;

const StyledInfo = styled(Info)`
  display: inline;
`;

const H2 = styled(StyledHeading2)`
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${(props) => props.theme.colors.white};

  @media ${(props) => props.theme.queries.prefersDarkTheme} {
    color: ${(props) => props.theme.colors.black};
  }
`;

const P = styled(StyledParagraph)`
  color: ${(props) => props.theme.colors.white};

  @media ${(props) => props.theme.queries.prefersDarkTheme} {
    color: ${(props) => props.theme.colors.black};
  }
`;

const StyledCheck = styled(Check)`
  display: inline;
`;

const StyledButton = styled(Button)`
  gap: 8px;
`;

export const CookieConsent = () => {
  return (
    <Wrapper>
      <Card>
        <H2>
          <StyledInfo /> Cookies
        </H2>
        <P>
          This website use cookies. The cookies is used for analyzing the
          website traffic and for providing basic necessary features.
        </P>
        <ButtonContainer>
          <StyledButton
            variant={"primary"}
            size={"medium"}
            onClick={() => setConsentCookie({ consent: true })}
          >
            <StyledCheck />
            <span>ok</span>
          </StyledButton>
        </ButtonContainer>
      </Card>
    </Wrapper>
  );
};
