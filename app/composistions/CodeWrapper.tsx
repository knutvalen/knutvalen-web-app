import styled, { css, keyframes } from "styled-components";
import { HTMLAttributes, useEffect, useState } from "react";
import { StyledHeading3 } from "@/app/components/StyledHeading3";
import { Check, Copy } from "react-feather";
import { Button as StyledButton } from "@/app/components/Button";

const Wrapper = styled.div`
  margin-bottom: 16px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.grey[200]};

  @media ${(props) => props.theme.queries.prefersDarkTheme} {
    border-color: ${(props) => props.theme.colors.grey[800]};
  }
`;

const StyledPre = styled.pre`
  display: flex;
`;

const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-bottom: 1px solid;
  border-color: ${(props) => props.theme.colors.grey[200]};
  color: ${(props) => props.theme.colors.black};

  @media ${(props) => props.theme.queries.prefersDarkTheme} {
    border-color: ${(props) => props.theme.colors.grey[800]};
    color: ${(props) => props.theme.colors.white};
  }
`;

const Heading3 = styled(StyledHeading3)`
  font-family: var(--font-roboto-mono), sans-serif;
  font-weight: ${(props) => props.theme.weights.normal};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const StyledCopy = styled(Copy)`
  display: inline;
`;

const StyledCheck = styled(Check)`
  display: inline;
`;

const Filler = styled.div`
  flex: 1;
`;

const Button = styled(StyledButton)`
  position: relative;
  color: inherit;
`;

const blah = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -150%);
  }
  15% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -250%);
  }
`;

const animationDuration = 1500;

const animation = css`
  animation: ${blah} ${animationDuration}ms ease-out;
`;

const CopiedWrapper = styled.div<{ $show: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -150%);
  opacity: 0;
  ${(props) => props.$show && animation};
`;

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  copy: string;
}

export const CodeWrapper = ({ title, copy, children }: Props) => {
  const [isCopied, setCopied] = useState(false);

  const onClick = () => {
    if (isCopied) {
      setCopied(false);
    }
    navigator.clipboard.writeText(copy).then(() => setCopied(true));
  };

  useEffect(() => {
    if (isCopied) {
      const timeout = setTimeout(() => {
        setCopied(false);
      }, animationDuration);
      return () => clearTimeout(timeout);
    }
  }, [isCopied]);

  return (
    <Wrapper>
      <HeadingWrapper>
        {title ? <Heading3>{title}</Heading3> : <Filler />}
        <Button size={"small"} variant={"text"} onClick={onClick}>
          <StyledCopy />
          <CopiedWrapper $show={isCopied}>
            <StyledCheck />
          </CopiedWrapper>
        </Button>
      </HeadingWrapper>
      <StyledPre>{children}</StyledPre>
    </Wrapper>
  );
};
