import { InputTypes } from "@/app/types/type";

const Input = ({
  type,
  className,
  onKeyDown,
  placeholder,
  value,
  onChange,
}: InputTypes) => {
  return (
    <input
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
      className={className}
      type={type}
    />
  );
};

export default Input;
