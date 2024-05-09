"use client";

import styled from "styled-components";
import { StyledHeading2 } from "@/app/components/StyledHeading2";
import { StyledParagraph } from "@/app/components/StyledParagraph";
import NextImage from "next/image";
import { StyledUnorderedList } from "@/app/components/StyledUnorderedList";
import { StyledCode } from "@/app/components/StyledCode";
import { StyledButton } from "@/app/components/StyledButton";

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Heading2 = styled(StyledHeading2)`
  padding: 16px 0;
`;

const Paragraph = styled(StyledParagraph)`
  padding-bottom: 16px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: fit-content;
  padding: 32px;

  @media ${(props) => props.theme.queries.phoneAndSmaller} {
    padding: 8px;
  }
`;

const Image = styled(NextImage)`
  width: 100%;
  height: 100%;
`;

const DemoImageWrapper = styled(ImageWrapper)`
  width: 50%;
  align-self: center;
`;

const UnorderedList = styled(StyledUnorderedList)`
  padding-bottom: 16px;
`;

const CodeWrapper = styled.pre`
  display: flex;
  padding-bottom: 16px;
`;

const InlineCode = styled(StyledCode)`
  padding: 0 4px;
`;

const CodeBlock = styled(StyledCode)`
  padding: 8px;
  flex: 1;
`;

export const ReactAndStyledComponents = () => {
  return (
    <Wrapper>
      <Paragraph>Get started</Paragraph>
      <Paragraph>StyledButton</Paragraph>
    </Wrapper>
  );
};
