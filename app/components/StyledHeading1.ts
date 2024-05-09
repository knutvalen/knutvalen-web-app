import styled from "styled-components";

export const StyledHeading1 = styled.h1`
  font-weight: ${(props) => props.theme.weights.medium};
  color: ${(props) => props.theme.colors.black};

  @media ${(props) => props.theme.queries.prefersDarkTheme} {
    color: ${(props) => props.theme.colors.white};
  }
`;
