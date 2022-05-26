import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';
import { root } from './styles.variables';

const CustomStyles = createGlobalStyle`
  :root { ${root} }

  html {
    ${tw`min-w-[350px] text-base`}
  }

  body {
    ${tw`font-primary font-normal bg-neutral-900 text-gray-100`}
  }

  h1 {
    ${tw`font-bold	text-5xl	leading-10`}
  }

  h2 {
    ${tw`font-bold	text-4xl	leading-9`}
  }

  h3 {
    ${tw`font-semibold	text-3xl	leading-8`}
  }

  p {}

  a {
    ${tw` text-neutral-50 hover:text-neutral-300 transition-all duration-300 ease-in`}
    text-decoration: none;
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
