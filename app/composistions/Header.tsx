"use client";

import styled, { keyframes } from "styled-components";
import React from "react";
import { Swoop } from "@/app/images/Swoop";
import NextLink from "next/link";
import { StyledSpan } from "@/app/components/StyledSpan";

const Wrapper = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  min-height: 400px;
  background: linear-gradient(
    to bottom,
    ${(props) => props.theme.colors.primary.normal},
    ${(props) => props.theme.colors.primary.light}
  );

  @media ${(props) => props.theme.queries.prefersDarkTheme} {
    background: linear-gradient(
      to bottom,
      ${(props) => props.theme.colors.black},
      ${(props) => props.theme.colors.grey[800]}
    );
  }
`;

const Nav = styled.nav`
  width: min(100%, ${1100 / 16}rem);
`;

const keyframeAnimation = keyframes`
  0% {
    transform: scale(70%) translateX(48px) translateY(40px);
    opacity: 0;
    filter: blur(8px);
  }
`;

const delayToDisplay = 500;

const Link = styled(NextLink)`
  display: inline-block;
  text-decoration: none;
  will-change: transform, opacity;
  animation: ${keyframeAnimation} 1000ms ease-in-out both;
  animation-delay: ${delayToDisplay}ms;
`;

const Text = styled(StyledSpan)`
  user-select: none;
  font-weight: ${(props) => props.theme.weights.mediumSmall};
  font-size: ${40 / 16}rem;
  padding: 0 32px;

  @media ${(props) => props.theme.queries.phoneAndSmaller} {
    padding: 0 16px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 90px;
  transform: translateY(1px);
  color: ${(props) => props.theme.colors.white};

  @media ${(props) => props.theme.queries.prefersDarkTheme} {
    color: ${(props) => props.theme.colors.black};
  }
`;

export const Header = () => {
  return (
    <Wrapper>
      <Nav>
        <Link href="/">
          <Text>Knut Valen</Text>
        </Link>
      </Nav>
      <ImageWrapper>
        <Swoop />
      </ImageWrapper>
    </Wrapper>
  );
};
