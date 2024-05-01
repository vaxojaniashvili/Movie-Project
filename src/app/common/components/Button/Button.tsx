import { ButtonTypes } from "@/app/types/type";

const Button = ({ onClick, type, children, className }: ButtonTypes) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
