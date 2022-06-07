import tw, { styled, css } from 'twin.macro';

export interface ImgContainerProps {
  square?: boolean;
  circle?: boolean;
}

export const Img = styled.div<ImgContainerProps>(({ square, circle }) => [
  tw`relative overflow-hidden w-full transition-all duration-300 ease-in`,

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
]);
