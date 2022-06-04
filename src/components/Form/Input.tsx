import React from 'react';
import tw, { styled, css } from 'twin.macro';

const _Input = React.forwardRef((props, ref: React.Ref<HTMLInputElement>) => (
  <input ref={ref} {...props} />
));

export const Input = styled(_Input)`
  ${css`
    outline-width: 0;
    ${tw`p-2.5 bg-neutral-800 rounded-xl focus-visible:(border border-purple-500) transition-[border] duration-300 delay-200 ease-linear`}
  `}
`;

const _TextArea = React.forwardRef((props, ref: React.Ref<HTMLTextAreaElement>) => (
  <textarea rows={10} cols={50} ref={ref} {...props} />
));

export const TextArea = styled(_TextArea)`
  ${css`
    outline-width: 0;
    ${tw`p-2.5 bg-neutral-800 rounded-xl focus-visible:(border border-purple-500) transition-[border] duration-300 delay-200 ease-linear`}
  `}
`;
