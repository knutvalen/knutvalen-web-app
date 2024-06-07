import { ButtonVariant } from "@/app/models/ButtonVariant";
import { Size } from "@/app/models/Size";
import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "@/app/components/StyledButton";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: Size;
  variant: ButtonVariant;
}

export const Button = ({ size, variant, children, ...props }: Props) => {
  return (
    <StyledButton $size={size} $variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};
