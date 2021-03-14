import React from 'react'

type Props = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
}

const variants = {
  'primary': 'transition-all px-5 py-2 bg-red-400 text-white tracking-wide font-semibold rounded-md hover:bg-red-500 border-solid rounded-md border-2 border-red-400 hover:border-red-500 hover:text-red-500',
  'secondary': 'transition-all px-5 py-2 bg-white text-red-400 tracking-wide font-semibold border-solid rounded-md border-2 border-red-400 hover:border-red-500 hover:text-red-500'
}

const Button = ({ children, variant, ...rest }: Props) => {
  return <button {...rest} className="bg-primary hover:bg-primary-dark">{children}</button>
}

export default Button