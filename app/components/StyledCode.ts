import styled from "styled-components";

export const StyledCode = styled.code`
  overflow-x: auto;
  font-family: var(--font-roboto-mono);
  font-weight: ${(props) => props.theme.weights.normal};
  color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.grey[100]};

  @media ${(props) => props.theme.queries.prefersDarkTheme} {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.grey[900]};
  }
`;
