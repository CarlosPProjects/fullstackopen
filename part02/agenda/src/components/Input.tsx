import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: FC<InputProps> = ({ name, label, ...props }) => {
  return (
    <div>
      <label htmlFor={name}>{label}: </label>
      <input id={name} {...props} />
    </div>
  );
};

export default Input;
