import { create } from '@storybook/theming';

export default create({
  // base: 'light',

  colorPrimary: '#f2f0f3',
  colorSecondary: '#1a171d',

  // UI
  appBg: '#100e12',
  appContentBg: '#100e12',
  appBorderColor: '#2d2833',
  appBorderRadius: 10,

  // Typography
  fontBase: '"Montserrat", sans-serif',
  fontCode: 'OCR A Std, monospace	',

  // Text colors
  textColor: '#fbfbfc',
  textInverseColor: '#c1b9c8',

  // Toolbar default and active colors
  barTextColor: '#cac4d1',
  barSelectedColor: '#fbfbfc',
  barBg: '#100e12',

  // Form colors
  inputBg: '#1a171d',
  inputBorder: '#2d2833',
  inputTextColor: '#fbfbfc',
  inputBorderRadius: 10,

  brandTitle: 'Magnum AI',
  brandUrl: 'https://magnumai.io',
  brandImage: require('../src/assets/brand.png'),
});
