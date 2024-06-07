import styled from "styled-components";
import NextLink from "next/link";
import { Size } from "@/app/models/Size";
import { ButtonVariant } from "@/app/models/ButtonVariant";
import { sizeStyles, variantStyles } from "@/app/components/StyledButton";

export const StyledLink = styled(NextLink)<{
  $size: Size;
  $variant: ButtonVariant;
}>`
  ${(props) => sizeStyles(props.$size)}
  ${(props) => variantStyles(props.$variant)}
`;
