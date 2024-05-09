import styled from "styled-components";
import NextLink from "next/link";
import { ButtonSize } from "@/app/types/ButtonSize";
import { ButtonVariant } from "@/app/types/ButtonVariant";
import { sizeStyles, variantStyles } from "@/app/components/StyledButton";

export const StyledLink = styled(NextLink)<{
  $size: ButtonSize;
  $variant: ButtonVariant;
}>`
  ${(props) => sizeStyles(props.$size)}
  ${(props) => variantStyles(props.$variant)}
`;
