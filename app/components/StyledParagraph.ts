import styled from "styled-components";

export const StyledParagraph = styled.p`
  font-weight: ${(props) => props.theme.weights.normal};
  color: ${(props) => props.theme.colors.black};

  @media ${(props) => props.theme.queries.prefersDarkTheme} {
    color: ${(props) => props.theme.colors.white};
  }
`;
