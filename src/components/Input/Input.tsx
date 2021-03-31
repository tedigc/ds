import React, { HTMLProps, PropsWithChildren } from "react";
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

export const InputGroup = ({ children }: PropsWithChildren<any>) => {
  return <div className="input-group">{children}</div>;
};

export const InputPrefix = ({ children }: PropsWithChildren<any>) => {
  return <div className="flex flex-col">{children}</div>;
};

export const InputSuffix = ({ children }: PropsWithChildren<any>) => {
  return <div className="">{children}</div>;
};
