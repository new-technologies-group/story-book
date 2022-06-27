import tw, { styled } from 'twin.macro';
import { CardProps } from '../Card.types';

export const Body = styled.main<CardProps>(({ image }) => [
  tw`relative py-5 md:p-5 flex-auto w-11/12 mx-auto transition-all duration-300 ease-linear`,
  image && tw`w-auto px-0`,
]);
