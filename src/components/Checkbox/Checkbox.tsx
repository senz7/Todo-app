import { FC } from "react";

type CheckboxProps = {
  label?: string;
  className?: string | undefined;
  id?: string;
  checked: boolean | undefined;
  onChange: () => void;
};

export const Checkbox: FC<CheckboxProps> = (props) => {
  const { label, className, id, checked, onChange } = props;

  return (
    <label className={`flex items-center cursor-pointer ${className}`}>
      <input
        id={id}
        type="checkbox"
        className="form-checkbox h-5 w-5 text-blue-500 rounded border-gray-300 focus:ring-blue-500"
        checked={checked}
        onChange={onChange}
      />
      {label && <span className="ml-2 text-gray-700">{label}</span>}
    </label>
  );
};
