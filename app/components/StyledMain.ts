import styled from "styled-components";

export const StyledMain = styled.main`
  flex: 1;
  align-self: center;
  width: min(100%, ${1100 / 16}rem);
  padding: 16px 32px 96px;

  @media ${(props) => props.theme.queries.phoneAndSmaller} {
    padding: 8px 16px 48px;
  }
`;
