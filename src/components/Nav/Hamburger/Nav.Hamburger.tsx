import React from 'react';
import { SideNavProps } from '../Nav.types';
import 'twin.macro';

export const StyledHamburger = ({ active }: SideNavProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width='1.5em'
  >
    <rect
      fill='white'
      x='2.22'
      y={!active ? '7.5' : '10.59'}
      width='19.56'
      height='2.82'
      rx='1.26'
      ry='1.26'
      transform={active ? 'translate(12 -4.97) rotate(45)' : ''}
      tw='transition-all duration-300 ease-linear'
    />
    <rect
      fill='white'
      x='2.22'
      y={!active ? '13.68' : '10.59'}
      width='19.56'
      height='2.82'
      rx='1.26'
      ry='1.26'
      transform={active ? 'translate(-4.97 12) rotate(-45)' : ''}
      tw='transition-all duration-300 ease-linear'
    />
  </svg>
);
