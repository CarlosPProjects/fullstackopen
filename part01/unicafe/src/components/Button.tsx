import { FC } from 'react'

interface ButtonProps {
  text: string;
  onclick: (e: React.sate) => void;
}

const Button: FC<ButtonProps> = ({ text, onclick }) => {
  return (
    <button onClick={onclick}>
      {text}
    </button>
  )
}

export default Button;