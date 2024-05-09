import styled from "styled-components";

export const StyledUnorderedList = styled.ul`
  color: ${(props) => props.theme.colors.black};

  @media ${(props) => props.theme.queries.prefersDarkTheme} {
    color: ${(props) => props.theme.colors.white};
  }
`;
