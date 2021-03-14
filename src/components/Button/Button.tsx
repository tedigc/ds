import React from 'react'

type Props = {
  children: React.ReactNode
}

const Button = ({ children, ...rest }: Props) => {
  return <button {...rest} className="px-5 py-2 bg-red-400 text-white tracking-wide font-semibold rounded-md">{children}</button>
}

export default Button