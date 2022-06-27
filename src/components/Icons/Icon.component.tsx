import React from 'react';
import * as icons from './components';
import { Icons, IconProps } from './Icons.types';

export const Icon = ({ variant, ...props }: IconProps) => {
  if (!variant) return null;
  const capitalized: string = (variant as string)
    .split('')
    .map((letter: string, i: number) => (i === 0 ? letter.toUpperCase() : letter))
    .join('');

  return React.createElement(icons[capitalized as Icons], {
    ...props,
  });
};
