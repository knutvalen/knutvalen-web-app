import { ButtonVariant } from "@/app/types/ButtonVariant";
import { ButtonSize } from "@/app/types/ButtonSize";
import { AnchorHTMLAttributes } from "react";
import { StyledLink } from "@/app/components/StyledLink";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  size: ButtonSize;
  variant: ButtonVariant;
}

export const Link = ({ href, size, variant, children, ...props }: Props) => {
  return (
    <StyledLink href={href} $size={size} $variant={variant} {...props}>
      {children}
    </StyledLink>
  );
};
