import { HTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import getClass from "../../utils/getClass/getClass";

interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  children: ReactNode;
  to?: string;
}

const Button = ({ children, to, ...rest }: ButtonProps) => {
  const props = {
    ...rest,
    className: getClass("button", rest.className),
  };

  return (
    <>
      {!to && <button {...props}>{children}</button>}
      {to && (
        <Link {...props} to={to}>
          {children}
        </Link>
      )}
    </>
  );
};

export default Button;
