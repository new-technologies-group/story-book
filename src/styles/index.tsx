import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import React from 'react';
import { createGlobalStyle, DefaultTheme, GlobalStyleComponent } from 'styled-components';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';
import { root } from './styles.variables';

const CustomStyles: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
  :root { ${root} }

  html {
    ${tw`min-w-[350px] text-base`}
  }

  body {
    ${tw`font-primary font-normal bg-neutral-900 text-white`}
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

  h4 {
    ${tw`font-semibold text-2xl leading-6`}
  }

  h5 {
    ${tw`font-semibold text-xl leading-4`}
  }

  h6 {
    ${tw`font-semibold text-lg leading-3`}
  }

  p {}

  a {
    ${tw` text-white hover:text-neutral-300 transition-all duration-300 ease-in`}
    text-decoration: none;
  }
`;

export const GlobalStyles: () => EmotionJSX.Element = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);
