import { HTMLAttributes, ReactNode } from "react";

interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  children: ReactNode;
  to?: string;
}

const Button = ({ children, to, ...rest }: ButtonProps) => (
  <>
    {to ? (
      <button {...rest}>{children}</button>
    ) : (
      <a {...rest} href={to}>
        {children}
      </a>
    )}
  </>
);

export default Button;
