import tw, { styled, css } from 'twin.macro';

export interface ImgContainerProps {
  square?: boolean;
  circle?: boolean;
  featured?: boolean;
}

export const Img = styled.div<ImgContainerProps>(({ square, circle, featured }) => [
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
      ${tw`p-0.5`}
      background: linear-gradient(
        var(--purple-700) 0%,
        var(--pink-500) 33%,
        rgba(0, 0, 0, 0) 66%
      );
    `,
]);
