import tw, { styled } from 'twin.macro';
import { CardSectionProps } from '../Card.types';

export const Section = styled.section<CardSectionProps>(({ shaded }) => [
  tw`p-2.5 border border-neutral-700 rounded-lg my-3 w-[fit-content] transition-all duration-300 ease-linear`,
  shaded && tw`bg-neutral-800 border-0`,
]);
