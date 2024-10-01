import { FC, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props}>
      {children}
    </button>
  )
}

export default Button;