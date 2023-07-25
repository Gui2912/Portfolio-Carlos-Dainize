import React, { ButtonHTMLAttributes } from "react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className: string;
}

const Button = ({ children, className, ...rest }: ButtonProps) => {
    return <button className={`${className} w-max`} {...rest}>{children}</button>;
};

export default Button;
