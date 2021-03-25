import React, { HTMLProps } from "react";
import classnames from "classnames";

type InputProps = {
  error?: boolean;
};

export const Input = (props: HTMLProps<HTMLInputElement> & InputProps) => {
  const { error, ...rest } = props;
  return (
    <input {...rest} className={classnames("input", error && "input-error")} />
  );
};
