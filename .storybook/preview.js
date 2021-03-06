import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { theme } from 'twin.macro';

import { GlobalStyles } from '../src/styles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: `${theme`colors.neutral.900`}`,
      },
    ],
  },
  // docs: {
  //   theme: theme`colors.neutral.900`,
  // },
  controls: { expanded: true },
};

export const decorators = [
  Story => (
    <BrowserRouter>
      <GlobalStyles />
      <Story />
    </BrowserRouter>
  ),
];
