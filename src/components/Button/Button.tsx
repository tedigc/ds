import React, { HTMLProps } from "react";
import classnames from "classnames";

export type ButtonProps = HTMLProps<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
};

export const Button = (props: ButtonProps) => {
  const { variant = "primary", className, children, type, ...rest } = props;

  return (
    <button
      {...rest}
      type={type as "button" | "submit" | "reset"}
      className={classnames("btn", `btn-${variant}`, className)}
    >
      {children}
    </button>
  );
};
