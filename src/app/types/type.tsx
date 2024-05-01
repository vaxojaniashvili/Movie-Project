export interface InputTypes {
    type?: string;
    className?: string;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    placeholder?: string;
    value?: string;
    onChange?: any;
}
export interface ButtonTypes {
    type?: any;
    className?: string;
    children?: string;
    onClick?: any
}