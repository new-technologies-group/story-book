/* eslint-disable react/function-component-definition */
/* eslint-disable @typescript-eslint/ban-types */
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import React from 'react';
import { createGlobalStyle, DefaultTheme, GlobalStyleComponent } from 'styled-components';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';
import { root } from './styles.variables';

const CustomStyles: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
  :root { ${root} }

  html {
    ${tw`text-base`}
    scroll-behavior: smooth;
  }

  body {
    ${tw`font-primary font-normal bg-neutral-900 text-white`}
  }

  h1 {
    ${tw`font-bold	text-3xl md:(text-5xl	leading-[1.5] tracking-wide)`}
  }

  h2 {
    ${tw`font-bold	text-2xl md:(text-4xl	leading-[1.45] tracking-wide)`}
  }

  h3 {
    ${tw`font-semibold	text-xl md:(text-3xl	leading-[1.4] tracking-wide)`}
  }

  h4 {
    ${tw`font-semibold text-lg md:(text-2xl leading-[1.35] tracking-wide)`}
  }

  h5 {
    ${tw`font-semibold text-base md:(text-xl leading-[1.3] tracking-wide)`}
  }

  h6 {
    ${tw`font-bold text-base md:(text-lg leading-[1.25] tracking-wide)`}
  }

  p {}

  a {
    ${tw` text-white hover:text-neutral-300 transition-all duration-300 ease-in`}
    text-decoration: none;
  }

  main {
    ${tw`mt-20 max-w-[1200px] mx-auto`}
  }

  section {
    ${tw` p-4 sm:p-10 my-20`}
    scroll-margin: 5rem;
  }
`;

export const GlobalStyles: () => EmotionJSX.Element = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);
