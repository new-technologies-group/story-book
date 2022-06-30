import React from 'react';
import { JSX } from '@emotion/react/jsx-runtime';

export const Add = (props: JSX.IntrinsicAttributes) => (
  <svg
    stroke='currentColor'
    fill='currentColor'
    strokeWidth='0'
    viewBox='0 0 24 24'
    height='1em'
    width='1em'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      d='M12,22 L12,2 M2,12 L22,12'
    />
  </svg>
);
