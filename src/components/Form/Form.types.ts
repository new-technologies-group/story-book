import { InputHTMLAttributes } from 'react';

export interface FormElementProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

export interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  lg?: boolean;
}
