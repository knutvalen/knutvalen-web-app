import styled, { css } from "styled-components";
import { Size } from "@/app/models/Size";
import { ButtonVariant } from "@/app/models/ButtonVariant";

const core = css`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  border: none;
  text-transform: uppercase;
  box-shadow: none;
  transition:
    box-shadow 400ms,
    transform 400ms;
  user-select: none;
  cursor: pointer;

  &:focus-visible {
    outline-offset: 4px;
  }

  @media ${(props) => props.theme.queries.usesMouseOrTrackpad} {
    &:enabled:hover {
      box-shadow: ${(props) => props.theme.elevations.medium};
      transform: scale(102%);
      transition:
        box-shadow 100ms,
        transform 100ms;
    }
  }

  &:enabled:active {
    box-shadow: ${(props) => props.theme.elevations.depressed};
    transform: scale(98%);
    transition:
      box-shadow 50ms,
      transform 50ms;
  }

  &:disabled {
    color: ${(props) => props.theme.colors.grey[400]};
    background: linear-gradient(
      to bottom right,
      ${(props) => props.theme.colors.grey[100]},
      ${(props) => props.theme.colors.grey[400]}
    );
    cursor: not-allowed;
  }

  @media ${(props) => props.theme.queries.prefersDarkTheme} {
    &:disabled {
      color: ${(props) => props.theme.colors.grey[900]};
      background: linear-gradient(
        to bottom right,
        ${(props) => props.theme.colors.grey[600]},
        ${(props) => props.theme.colors.grey[900]}
      );
    }
  }
`;

const small = css`
  font-size: ${16 / 16}rem;
  padding: 6px 12px;
  border-radius: 2px;
`;

const medium = css`
  font-size: ${18 / 16}rem;
  padding: 14px 20px;
  border-radius: 2px;
`;

const large = css`
  font-size: ${21 / 16}rem;
  padding: 18px 32px;
  border-radius: 4px;
`;

const contained = css`
  ${core};
  color: ${(props) => props.theme.colors.black};
  background: linear-gradient(
    to bottom right,
    ${(props) => props.theme.colors.primary.light},
    ${(props) => props.theme.colors.primary.normal}
  );
  text-decoration: none;

  @media ${(props) => props.theme.queries.prefersDarkTheme} {
    color: ${(props) => props.theme.colors.white};
    background: linear-gradient(
      to bottom right,
      ${(props) => props.theme.colors.primary.normal},
      ${(props) => props.theme.colors.primary.dark}
    );
  }
`;

const outlined = css`
  ${core};
  color: ${(props) => props.theme.colors.primary.normal};
  background-color: transparent;
  border: 2px solid currentColor;

  &:disabled {
    color: ${(props) => props.theme.colors.grey[300]};
    background: none;
  }

  @media ${(props) => props.theme.queries.prefersDarkTheme} {
    color: ${(props) => props.theme.colors.primary.light};
    background-color: transparent;

    &:disabled {
      color: ${(props) => props.theme.colors.grey[800]};
      background: none;
    }
  }
`;

const text = css`
  ${core};
  color: ${(props) => props.theme.colors.primary.normal};
  background-color: transparent;
  text-decoration: underline;

  &:disabled {
    color: ${(props) => props.theme.colors.grey[300]};
    background: none;
  }

  &:focus-visible {
    outline-color: currentColor;
  }

  @media ${(props) => props.theme.queries.prefersDarkTheme} {
    &:disabled {
      color: ${(props) => props.theme.colors.grey[800]};
      background: none;
    }
  }
`;

export const sizeStyles = (size: Size) =>
  ({
    small: small,
    medium: medium,
    large: large,
  })[size];

export const variantStyles = (variant: ButtonVariant) =>
  ({
    contained: contained,
    outlined: outlined,
    text: text,
  })[variant];

export const StyledButton = styled.button<{
  $size: Size;
  $variant: ButtonVariant;
}>`
  ${(props) => sizeStyles(props.$size)}
  ${(props) => variantStyles(props.$variant)}
`;
