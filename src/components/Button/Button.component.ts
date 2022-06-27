import tw, { styled, css } from 'twin.macro';
import { ButtonProps } from './Button.types';

export const Button = styled.button<ButtonProps>(({ variant = 'primary' }) => [
  tw`m-2 text-white font-bold py-4 px-6 rounded-full transition-all duration-200 ease-in hover:-translate-y-0.5`,
  css`
    background-size: 125% !important;
    &:hover {
      background-size: 100% !important;
    }
  `,

  variant === 'secondary' &&
    css`
      ${tw`border border-neutral-700 hover:border-neutral-600`}
      &:hover {
        box-shadow: 0 0 5px #fff, -3px 0 10px var(--neutral-500),
          3px 0 10px var(--neutral-500), 0 0 6px var(--neutral-500),
          -3px 0 9px var(--neutral-500), 3px 0 9px var(--neutral-600);
      }
    `,

  variant === 'text' &&
    css`
      &:hover {
        text-shadow: 0 0 1px var(--neutral-50), 0 0 2px var(--neutral-50),
          0 0 1px var(--neutral-50), 0 0 9px var(--neutral-50), 0 0 1px var(--neutral-200),
          0 0 10px var(--neutral-200);
      }
    `,

  variant === 'primary' &&
    css`
      background: linear-gradient(var(--neutral-900), var(--neutral-900)) padding-box,
        linear-gradient(to left, var(--purple-700), var(--pink-500)) border-box;
      border-radius: 50em;
      border: 1px solid transparent;
      &:hover {
        box-shadow: 0 0 5px #fff, -3px 0 10px var(--pink-500),
          3px 0 10px var(--purple-500), 0 0 6px var(--purple-500),
          -3px 0 9px var(--pink-500), 3px 0 9px var(--pink-600);
      }
    `,
]);
