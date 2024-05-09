import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
  border-radius: 12px;
  background-color: ${(props) => props.theme.colors.grey[50]};
  box-shadow: ${(props) => props.theme.elevations.medium};

  @media ${(props) => props.theme.queries.prefersDarkTheme} {
    background-color: ${(props) => props.theme.colors.grey[900]};
    box-shadow: none;
  }

  @media ${(props) => props.theme.queries.phoneAndSmaller} {
    padding: 8px;
  }
`;
