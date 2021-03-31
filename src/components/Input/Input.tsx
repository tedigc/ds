import React, { HTMLProps, PropsWithChildren } from "react";
import classnames from "classnames";

type InputProps = {
  error?: boolean;
};

type InputGroupProps = PropsWithChildren<{
  error?: boolean;
}>;

export const Input = (props: HTMLProps<HTMLInputElement> & InputProps) => {
  const { error, ...rest } = props;
  return (
    <input {...rest} className={classnames("input", error && "input-error")} />
  );
};

export const InputGroup = ({ error, children }: InputGroupProps) => {
  return (
    <div className={classnames("input-group", error && "input-group-error")}>
      {children}
    </div>
  );
};

export const InputPrefix = ({
  children,
}: PropsWithChildren<Record<string, unknown>>) => {
  return <div>{children}</div>;
};

export const InputSuffix = ({
  children,
}: PropsWithChildren<Record<string, unknown>>) => {
  return <div>{children}</div>;
};
