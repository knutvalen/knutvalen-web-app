import styled from "styled-components";

export const StyledHeading3 = styled.h3`
  font-weight: ${(props) => props.theme.weights.medium};
  color: ${(props) => props.theme.colors.black};

  @media ${(props) => props.theme.queries.prefersDarkTheme} {
    color: ${(props) => props.theme.colors.white};
  }
`;
