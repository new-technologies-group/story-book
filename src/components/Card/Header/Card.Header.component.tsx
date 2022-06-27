import React from 'react';
import tw, { styled } from 'twin.macro';
import { Divider } from '../../Divider';
import { CardProps } from '../Card.types';

const _Header = styled.header<CardProps>(({ featured, image }) => [
  tw`py-5 md:p-5 w-11/12 mx-auto border-b border-solid border-neutral-700 rounded-t transition-all duration-300 ease-linear`,
  featured && tw`border-0 pb-0`,
  image && tw`w-auto px-0`,
]);

export const Header: React.FC<CardProps> = ({ featured, image, children }) => (
  <_Header
    featured={featured}
    image={image}
  >
    {children}
    {featured && <Divider />}
  </_Header>
);
