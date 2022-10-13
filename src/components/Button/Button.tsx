import { HTMLAttributes, ReactNode } from "react";

interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  children: ReactNode;
  to?: string;
}

const Button = ({ children, to, ...rest }: ButtonProps) => {
  const props = {
    ...rest,
    className: `button ${rest.className}`,
  };

  return (
    <>
      {to || <button {...props}>{children}</button>}
      {to && (
        <a {...props} href={to}>
          {children}
        </a>
      )}
    </>
  );
};

export default Button;
