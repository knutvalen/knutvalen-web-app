"use client";

import styled, { css, keyframes } from "styled-components";

const wiggle = keyframes`
  12.5% {
    border-radius: 37% 63% 70% 30% / 30% 62% 38% 70%;
  }
  25% {
    border-radius: 50% 50% 70% 30% / 52% 62% 38% 48%;
  }
  37.5% {
    border-radius: 33% 67% 18% 82% / 52% 75% 25% 48%;
  }
  50% {
    border-radius: 73% 27% 18% 82% / 52% 32% 68% 48%;
  }
  62.5% {
    border-radius: 73% 27% 74% 26% / 64% 32% 68% 36%;
  }
  75% {
    border-radius: 84% 16% 15% 85% / 55% 79% 21% 45%;
  }
  87.5% {
    border-radius: 12% 88% 69% 31% / 10% 66% 34% 90%;
  }
`;

const WigglyBlob = styled.div`
  width: 50%;
  aspect-ratio: 1;
  border-radius: 50%;
  animation: ${wiggle} 3s infinite ease-out;
  background-color: ${(props) => props.theme.colors.primary.normal};

  @media ${(props) => props.theme.queries.prefersDarkTheme} {
    background-color: ${(props) => props.theme.colors.primary.dark};
  }
`;

type Size = "small" | "medium" | "large";

const slinky = keyframes`
  0% {
    clip-path: polygon(50% 50%, 0 0, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 0%);
  }
  12.5% {
    clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 0%);
  }
  25% {
    clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 100%);
  }
  50% {
    clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%);
  }
  62.5% {
    clip-path: polygon(50% 50%, 100% 0, 100% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%);
  }
  75% {
    clip-path: polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 50% 100%, 0% 100%);
  }
  100% {
    clip-path: polygon(50% 50%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 0% 100%);
  }
`;

const rotate = keyframes`
  0% {
    transform: scaleY(1) rotate(0deg);
  }
  49.99% {
    transform: scaleY(1) rotate(135deg);
  }
  50% {
    transform: scaleY(-1) rotate(0deg);
  }
  100% {
    transform: scaleY(-1) rotate(-135deg);
  }
`;

const small = css`
  --size: 24px;

  &:before {
    border-width: 1px;
  }
`;

const medium = css`
  --size: 48px;

  &:before {
    border-width: 2px;
  }
`;

const large = css`
  --size: 96px;
  
  &:before {
    border-width: 2px;
  }
`;

const sizeStyles = (size: Size) =>
  ({
    small: small,
    medium: medium,
    large: large,
  })[size];

const SlinkyRotator = styled.div<{
  $size: Size;
}>`
  ${(props) => sizeStyles(props.$size)}
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  border-style: solid;
  border-color: ${(props) => props.theme.colors.black};

  @media ${(props) => props.theme.queries.prefersDarkTheme} {
    border-color: ${(props) => props.theme.colors.white};
  }

  will-change: transform;
  animation:
    ${slinky} 1000ms linear infinite alternate,
    ${rotate} 2000ms linear infinite;
`;

export const Loader = ({ size }: { size: Size }) => <SlinkyRotator $size={size} />;
