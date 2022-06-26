import React from 'react';
import { theme } from 'twin.macro';

import { GlobalStyles } from './../src/styles';

import myTheme from './theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: `${theme`colors.neutral.900`})`,
      },
    ],
  },
  controls: { expanded: true },
};

export const decorators = [
  Story => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
];
