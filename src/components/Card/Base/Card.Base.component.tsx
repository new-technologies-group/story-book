import React from 'react';
import tw, { styled, css } from 'twin.macro';
import { CardProps } from '../Card.types';

const _Base = styled.div<CardProps>(({ featured, featuredInverse, featuredSides }) => [
  tw`w-full rounded-xl p-2.5 bg-neutral-900 transition-all duration-300 ease-linear`,
  featured &&
    css`
      background: linear-gradient(
        to bottom,
        var(--purple-700) 0%,
        var(--pink-500) 33%,
        rgba(0, 0, 0, 0) 66%
      );
    `,
  featuredInverse &&
    css`
      background: linear-gradient(
        to top,
        var(--purple-700) 0%,
        var(--pink-500) 33%,
        rgba(0, 0, 0, 0) 66%
      );
    `,
  featuredSides &&
    css`
      background: linear-gradient(
        rgba(0, 0, 0, 0) 0%,
        var(--purple-700) 33%,
        var(--pink-500) 50%,
        rgba(0, 0, 0, 0) 66%
      );
    `,
]);

export const _Inner = styled.div<CardProps>(({ featured }) => [
  tw`rounded-xl bg-neutral-900 border border-neutral-700 py-5 md:p-2.5 transition-all duration-300 ease-linear`,
  featured && tw`border-0 shadow-2xl`,
]);

export const Base: React.FC<CardProps> = ({
  featured,
  featuredInverse,
  featuredSides,
  children,
}) => (
  <_Base
    featured={featured}
    featuredInverse={featuredInverse}
    featuredSides={featuredSides}
  >
    <_Inner featured={featured || featuredInverse || featuredSides}>{children}</_Inner>
  </_Base>
);
