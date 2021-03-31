import React, { PropsWithChildren } from "react";
import classnames from "classnames";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

type NavLinkProps = LinkProps & PropsWithChildren<{ string?: unknown }>;

const NavLink = (props: NavLinkProps) => {
  const { children, ...linkProps } = props;
  const router = useRouter();
  const isActive = router.pathname === props.href;
  if (isActive) console.log("isActive", props.href);
  return (
    <Link {...linkProps}>
      <a
        className={classnames(
          "transition-all hover:text-indigo-50 py-1",
          isActive ? "text-indigo-50" : "text-indigo-400"
        )}
      >
        {children}
      </a>
    </Link>
  );
};

type LayoutProps = PropsWithChildren<{ [key: string]: unknown }>;

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex">
      <nav className="flex flex-col p-4 w-64 min-h-screen h-full bg-indigo-900 text-white ">
        <p className="block text-gray-50 text-xl mb-6 font-bold tracking-wide">
          Bento Design System
        </p>

        <p className="block text-gray-50 text-md mb-2">Components</p>
        <NavLink href="/components/button">Button</NavLink>
        <NavLink href="/components/input">Input</NavLink>

        <p className="block text-gray-50 text-md mb-2 mt-6">Examples</p>
        <NavLink href="/examples/forms">Forms</NavLink>
      </nav>
      <div className="p-10">{children}</div>
    </div>
  );
};
