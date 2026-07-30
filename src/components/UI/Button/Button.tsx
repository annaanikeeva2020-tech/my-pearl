import type { ButtonHTMLAttributes, ReactNode } from "react";
import css from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={css.button} {...props}>
      {children}
    </button>
  );
}