import React from 'react';
import tw, { styled, css } from 'twin.macro';

export interface CardProps {
  featured?: boolean;
  image?: boolean;
  direction?: 'right' | 'bottom' | 'left' | 'top';
}

export interface BulletProps {
  inProgress?: boolean;
  complete?: boolean;
}

const CardBase = styled.div<CardProps>(({ featured, direction = 'bottom' }) => [
  tw`w-full rounded-xl p-2.5 bg-neutral-900 transition-all duration-300 ease-linear`,
  featured &&
    css`
      background: linear-gradient(
        to ${direction},
        var(--purple-700) 0%,
        var(--pink-500) 33%,
        rgba(0, 0, 0, 0) 66%
      );
    `,
]);

const InnerCard = styled.div<CardProps>(({ featured }) => [
  tw`rounded-xl bg-neutral-900 border border-neutral-700 py-5 md:p-2.5 transition-all duration-300 ease-linear`,
  featured && tw`border-0 shadow-2xl`,
]);

export const Base: React.FC<CardProps> = ({ featured, children }) => (
  <CardBase featured={featured}>
    <InnerCard featured={featured}>{children}</InnerCard>
  </CardBase>
);

const _Header = styled.header<CardProps>(({ featured, image }) => [
  tw`py-5 md:p-5 w-11/12 mx-auto border-b border-solid border-neutral-700 rounded-t transition-all duration-300 ease-linear`,
  featured && tw`border-0 pb-0`,
  image && tw`w-auto px-0`,
]);

export const Header: React.FC<CardProps> = ({ featured, image, children }) => (
  <_Header featured={featured} image={image}>
    {children}
    {featured && <Divider />}
  </_Header>
);

export const Divider = styled.div`
  ${tw`h-[.5px] my-5 bg-gradient-to-r from-purple-700  via-pink-500 to-neutral-900 transition-all duration-300 ease-linear`}
`;

export const Body = styled.main<CardProps>(({ image }) => [
  tw`relative py-5 md:p-5 flex-auto w-11/12 mx-auto transition-all duration-300 ease-linear`,
  image && tw`w-auto px-0`,
]);

export const Section = styled.section<{ shaded?: boolean }>(({ shaded }) => [
  tw`p-2.5 border border-neutral-700 rounded-lg my-3 w-[fit-content] transition-all duration-300 ease-linear`,
  shaded && tw`bg-neutral-800 border-0`,
]);

const BulletBase = styled.div<BulletProps>(({ inProgress, complete }) => [
  tw`flex justify-center items-center mx-5 w-4 h-4 rounded-full bg-gradient-to-b from-purple-500 to-pink-300 transition-all duration-300 ease-linear`,
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
