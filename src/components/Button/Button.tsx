import { FC } from "react";

type ButtonProps = {
  className?: string | undefined;
  type?: "submit" | "button" | "reset" | undefined;
  id?: string;
  children: any;
  disabled?: boolean | undefined;
  variant?: "primary" | "secondary";
  onClick?: (e: any) => void;
  onSumbit?: () => void;
};

export const Button: FC<ButtonProps> = (props) => {
  const {
    disabled,
    className,
    type,
    id,
    children,
    variant,
    onClick,
    onSumbit,
  } = props;

  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  };

  return (
    <button
      onSubmit={onSumbit}
      disabled={disabled}
      onClick={onClick}
      className={`${className} ${variant}`}
      type={type}
      id={id}
    >
      {children}
    </button>
  );
};
