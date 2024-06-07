import { ButtonVariant } from "@/app/models/ButtonVariant";
import { Size } from "@/app/models/Size";
import { AnchorHTMLAttributes } from "react";
import { StyledLink } from "@/app/components/StyledLink";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  size: Size;
  variant: ButtonVariant;
}

export const Link = ({ href, size, variant, children, ...props }: Props) => {
  return (
    <StyledLink href={href} $size={size} $variant={variant} {...props}>
      {children}
    </StyledLink>
  );
};
