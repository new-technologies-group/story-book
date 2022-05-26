import { create } from '@storybook/theming';

export default create({
  // base: 'light',

  colorPrimary: '#2d2833',
  colorSecondary: '#37303e',

  // UI
  appBg: '#1a171d',
  appContentBg: '#100e12',
  appBorderColor: '#c1b9c8',
  appBorderRadius: 10,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#fbfbfc',
  textInverseColor: '#100e12',

  // Toolbar default and active colors
  barTextColor: '#afafb9',
  barSelectedColor: '#4dffec',
  barBg: '#1a171d',

  // Form colors
  inputBg: '#1a171d',
  inputBorder: '#100e12',
  inputTextColor: '#e1e1eb',
  inputBorderRadius: 10,

  brandTitle: 'Magnum AI',
  brandUrl: 'https://magnumai.io',
  brandImage: 'https://www.magnumai.io/logo-small.6417fbc2.png',
});
