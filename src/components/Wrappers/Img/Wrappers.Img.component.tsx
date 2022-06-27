import React from 'react';
import tw, { styled, css } from 'twin.macro';
import { ImgContainerProps } from './Wrappers.Img.types';

const _Img = styled.div<ImgContainerProps>(({ square, circle, featured }) => [
  tw`relative overflow-hidden w-full transition-all duration-300 ease-in rounded-xl`,

  square &&
    css`
      ${tw`before:block`}
      &:before {
        content: '';
        padding-top: 100%;
      }
      & img {
        ${tw`absolute top-1/2 left-1/2 -translate-y-1/2	-translate-x-1/2`}
      }
    `,

  circle && tw`rounded-full`,
  featured &&
    css`
      background: linear-gradient(
        var(--purple-700) 0%,
        var(--pink-500) 33%,
        rgba(0, 0, 0, 0) 66%
      );
      & img {
        width: 99% !important;
      }
    `,
]);

export const Img: React.FC<ImgContainerProps> = props => (
  <_Img {...props}>{props.children}</_Img>
);
