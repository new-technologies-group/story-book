import React from 'react';
import tw, { styled, css } from 'twin.macro';

export interface CardProps {
  featured?: boolean;
  image?: boolean;
}

const CardBase = styled.div<CardProps>(({ featured }) => [
  tw`w-full min-w-[400px] rounded-xl p-2.5 bg-neutral-900 transition-all duration-300 ease-linear`,
  featured &&
    css`
      background: linear-gradient(
        var(--purple-700) 0%,
        var(--pink-500) 33%,
        rgba(0, 0, 0, 0) 66%
      );
    `,
]);

const InnerCard = styled.div<CardProps>(({ featured }) => [
  tw`rounded-xl bg-neutral-900 border border-neutral-700 p-2.5`,
  featured && tw`border-0 shadow-2xl`,
]);

export const Base: React.FC<CardProps> = ({ featured, image, children }) => (
  <CardBase featured={featured}>
    <InnerCard featured={featured}>{children}</InnerCard>
  </CardBase>
);

export const Header = styled.header`
  ${tw`p-5 w-11/12 mx-auto border-b border-solid border-neutral-700 rounded-t`}
`;

export const Body = styled.main`
  ${tw`relative p-6 flex-auto`}
`;

export const Section = styled.section<{ shaded?: boolean }>(({ shaded }) => [
  tw`p-2.5 border border-neutral-700 rounded-lg my-3`,
  shaded && tw`bg-neutral-800 border-0`,
]);
