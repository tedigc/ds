import React, { PropsWithChildren } from "react";
import Link from "next/link";

type LayoutProps = PropsWithChildren<{ [key: string]: unknown }>;

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex">
      <nav className="flex flex-col p-4 w-64 min-h-screen h-full bg-indigo-900 text-white ">
        <p className="block text-gray-50 text-xl mb-6 font-bold tracking-wide">
          Bento Design System
        </p>
        <p className="block text-gray-50 text-md mb-6">Components</p>
        <Link href="/components/button">
          <a className="transition-all text-indigo-400 hover:text-indigo-50 py-2">
            Button
          </a>
        </Link>
        <Link href="/components/input">
          <a className="transition-all text-indigo-400 hover:text-indigo-50 py-2">
            Input
          </a>
        </Link>
      </nav>
      <div className="p-10">{children}</div>
    </div>
  );
};
