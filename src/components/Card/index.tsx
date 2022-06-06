import React from 'react';
import tw, { styled, css } from 'twin.macro';

export interface CardProps {
  featured?: boolean;
  image?: boolean;
}

export interface BulletProps {
  inProgress?: boolean;
  complete?: boolean;
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

export const Base: React.FC<CardProps> = ({ featured, children }) => (
  <CardBase featured={featured}>
    <InnerCard featured={featured}>{children}</InnerCard>
  </CardBase>
);

const _Header = styled.header<CardProps>(({ featured }) => [
  tw`p-5 w-11/12 mx-auto border-b border-solid border-neutral-700 rounded-t`,
  featured && tw`border-0 pb-0`,
]);

export const Header: React.FC<CardProps> = ({ featured, children }) => (
  <_Header featured={featured}>
    {children}
    {featured && (
      <div tw='h-[.5px] my-5 bg-gradient-to-r from-purple-700  via-pink-500 to-neutral-900' />
    )}
  </_Header>
);

export const Body = styled.main`
  ${tw`relative p-6 flex-auto w-11/12 mx-auto`}
`;

export const Section = styled.section<{ shaded?: boolean }>(({ shaded }) => [
  tw`p-2.5 border border-neutral-700 rounded-lg my-3 w-[fit-content]`,
  shaded && tw`bg-neutral-800 border-0`,
]);

const BulletBase = styled.div<BulletProps>(({ inProgress, complete }) => [
  tw`flex justify-center items-center mx-5 w-4 h-4 rounded-full bg-gradient-to-b from-purple-500 to-pink-300`,
  (inProgress || complete) &&
    css`
      box-shadow: 0 0 5px #fff, -3px 0 10px var(--pink-500), 3px 0 10px var(--purple-500),
        0 0 6px var(--purple-500), -3px 0 9px var(--pink-500), 3px 0 9px var(--pink-600);
    `,
]);

export const Bullet = ({ complete, inProgress }: BulletProps) => (
  <BulletBase complete={complete} inProgress={inProgress}>
    {!complete && <div tw='w-3 h-3 m-auto rounded-full bg-neutral-900' />}
  </BulletBase>
);
