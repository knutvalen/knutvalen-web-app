import { ButtonVariant } from "@/app/types/ButtonVariant";
import { ButtonSize } from "@/app/types/ButtonSize";
import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "@/app/components/StyledButton";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: ButtonSize;
  variant: ButtonVariant;
}

export const Button = ({ size, variant, children, ...props }: Props) => {
  return (
    <StyledButton $size={size} $variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};
