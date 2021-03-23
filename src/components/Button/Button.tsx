import React, { HTMLProps } from "react";
import classnames from "classnames";

export type ButtonProps = HTMLProps<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
};

const styles = {
  common:
    "block transition-all px-4 py-2 text-base rounded text-white font-light ",
  disabled: "disabled:bg-gray-300 disabled:cursor-not-allowed disabled:ring-0",
  primary:
    "bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-800 active:ring-2 active:ring-indigo-500",
  secondary:
    "bg-indigo-100 text-indigo-600 hover:bg-indigo-200 active:bg-indigo-300 active:ring-2 active:ring-indigo-500",
};

export const Button = (props: ButtonProps) => {
  const { variant = "primary", className, children, ...rest } = props;

  return (
    <button
      {...rest}
      className={classnames(
        styles.common,
        styles.disabled,
        styles[variant],
        className
      )}
    >
      {children}
    </button>
  );
};
