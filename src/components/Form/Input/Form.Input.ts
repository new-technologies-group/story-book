import tw, { styled, css } from 'twin.macro';
import { FormElementProps } from '../Form.types';

export const Input = styled.input<FormElementProps>(({ invalid }) => [
  css`
    outline-width: 0;
    &:focus-visible {
      background: linear-gradient(var(--neutral-900), var(--neutral-900)) padding-box,
        linear-gradient(to left, var(--purple-700), var(--pink-500)) border-box;
      border-radius: 0.75rem;
      border: 1px solid transparent;
    }
    ${tw`p-2.5 bg-neutral-800 rounded-xl transition-[border] duration-300 delay-200 ease-linear`}
  `,
  invalid && tw`border border-red-500`,
]);
