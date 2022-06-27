import React from 'react';
import tw, { styled } from 'twin.macro';
import { DividerProps } from './Divider.types';

export const _Divider = styled.div<DividerProps>(({ col, row = true }) => [
  tw`transition-all duration-300 ease-linear`,

  row &&
    tw`w-full h-[.5px] my-5 bg-gradient-to-r from-purple-700  via-pink-500 to-neutral-900 `,

  col &&
    tw`h-full w-[.5px] mx-5 bg-gradient-to-b from-purple-700 via-pink-500 to-neutral-900`,
]);

export const Divider: React.FC<DividerProps> = props => <_Divider {...props} />;
