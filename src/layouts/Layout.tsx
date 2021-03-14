import React, { PropsWithChildren } from 'react'

type LayoutProps = PropsWithChildren<{[key: string]: unknown}>

export const Layout = ({ children }: LayoutProps) => {
  return <div className="p-10">{children}</div>
}