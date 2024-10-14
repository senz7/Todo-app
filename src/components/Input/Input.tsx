import { FC } from "react";

type InputProps = {
  className?: string | undefined;
  name?: string | undefined;
  onChange?: (e: any) => void;
  type?: "email" | "number" | "password" | "search" | "text" | undefined;
  value?: string | number | readonly string[] | undefined;
  placeholder?: string | undefined;
};

export const Input: FC<InputProps> = (props) => {
  const { onChange, value, name, className, type, placeholder } = props;

  return (
    <input
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      name={name}
      className={className}
      type={type}
    />
  );
};
