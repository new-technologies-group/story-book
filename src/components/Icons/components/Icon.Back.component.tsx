import React from 'react';
import { JSX } from '@emotion/react/jsx-runtime';

export const Back = (props: JSX.IntrinsicAttributes) => (
  <svg
    stroke='currentColor'
    fill='none'
    strokeWidth='0'
    viewBox='0 0 24 24'
    height='1em'
    width='1em'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M15 19l-7-7 7-7'
    />
  </svg>
);
