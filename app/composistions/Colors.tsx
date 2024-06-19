"use client";

import styled, { css } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
`;

const Color = css`
  --size: 100px;
  width: var(--size);
  height: var(--size);
`;

const ThemeColorWrapper = styled.div`
  display: flex;
`;

const ThemeColor = styled.div`
  ${Color}

  &:nth-child(1) {
    background-color: ${(props) => props.theme.colors.grey[50]};
  }

  &:nth-child(2) {
    background-color: ${(props) => props.theme.colors.grey[100]};
  }

  &:nth-child(3) {
    background-color: ${(props) => props.theme.colors.grey[200]};
  }

  &:nth-child(4) {
    background-color: ${(props) => props.theme.colors.grey[300]};
  }

  &:nth-child(5) {
    background-color: ${(props) => props.theme.colors.grey[400]};
  }

  &:nth-child(6) {
    background-color: ${(props) => props.theme.colors.grey[500]};
  }

  &:nth-child(7) {
    background-color: ${(props) => props.theme.colors.grey[600]};
  }

  &:nth-child(8) {
    background-color: ${(props) => props.theme.colors.grey[700]};
  }

  &:nth-child(9) {
    background-color: ${(props) => props.theme.colors.grey[800]};
  }

  &:nth-child(10) {
    background-color: ${(props) => props.theme.colors.grey[900]};
  }

  &:nth-child(11) {
    background-color: ${(props) => props.theme.colors.grey[950]};
  }
`;

const ColorMix = styled.div`
  ${Color}

  &:nth-child(1) {
    background-color: ${(props) => props.theme.colors.colorMixGrey[50]};
  }

  &:nth-child(2) {
    background-color: ${(props) => props.theme.colors.colorMixGrey[100]};
  }

  &:nth-child(3) {
    background-color: ${(props) => props.theme.colors.colorMixGrey[200]};
  }

  &:nth-child(4) {
    background-color: ${(props) => props.theme.colors.colorMixGrey[300]};
  }

  &:nth-child(5) {
    background-color: ${(props) => props.theme.colors.colorMixGrey[400]};
  }

  &:nth-child(6) {
    background-color: ${(props) => props.theme.colors.colorMixGrey[500]};
  }

  &:nth-child(7) {
    background-color: ${(props) => props.theme.colors.colorMixGrey[600]};
  }

  &:nth-child(8) {
    background-color: ${(props) => props.theme.colors.colorMixGrey[700]};
  }

  &:nth-child(9) {
    background-color: ${(props) => props.theme.colors.colorMixGrey[800]};
  }

  &:nth-child(10) {
    background-color: ${(props) => props.theme.colors.colorMixGrey[900]};
  }

  &:nth-child(11) {
    background-color: ${(props) => props.theme.colors.colorMixGrey[950]};
  }
`;

export const Colors = () => {
  return (
    <Wrapper>
      <ThemeColorWrapper>
        <ThemeColor>50</ThemeColor>
        <ThemeColor>100</ThemeColor>
        <ThemeColor>200</ThemeColor>
        <ThemeColor>300</ThemeColor>
        <ThemeColor>400</ThemeColor>
        <ThemeColor>500</ThemeColor>
        <ThemeColor>600</ThemeColor>
        <ThemeColor>700</ThemeColor>
        <ThemeColor>800</ThemeColor>
        <ThemeColor>900</ThemeColor>
        <ThemeColor>950</ThemeColor>
      </ThemeColorWrapper>
      <ThemeColorWrapper>
        <ColorMix>50</ColorMix>
        <ColorMix>100</ColorMix>
        <ColorMix>200</ColorMix>
        <ColorMix>300</ColorMix>
        <ColorMix>400</ColorMix>
        <ColorMix>500</ColorMix>
        <ColorMix>600</ColorMix>
        <ColorMix>700</ColorMix>
        <ColorMix>800</ColorMix>
        <ColorMix>900</ColorMix>
        <ColorMix>950</ColorMix>
      </ThemeColorWrapper>
    </Wrapper>
  );
};
