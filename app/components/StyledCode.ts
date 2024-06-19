import styled from "styled-components";

export const StyledCode = styled.code<{ $isOutput?: boolean }>`
  overflow-x: auto;
  font-family: ${(props) =>
    props.$isOutput ? `monospace` : `var(--font-roboto-mono)`};
  font-weight: ${(props) => props.theme.weights.normal};
  color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.grey[50]};

  @media ${(props) => props.theme.queries.prefersDarkTheme} {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.grey[950]};
  }
`;
