import React from 'react';
import tw, { styled } from 'twin.macro';
import { Icon } from '../Icons';

const FooterBase = styled.footer`
  ${tw`w-full py-2 px-4 border-t border-neutral-700 fixed bg-neutral-900 bottom-0 left-0 flex flex-col justify-center items-center`}
`;

export const Footer = () => (
  <FooterBase>
    <p tw='whitespace-nowrap text-sm'>&#169; {new Date().getFullYear()} Magnum Ai</p>
    <div tw='flex mt-3'>
      <a href='https://discord.gg/tUDWfAhxaR' target='_blank' rel='noopener noreferrer'>
        <Icon
          variant='Discord'
          tw='hover:text-[#5865f2] transition-all duration-200 ease-in mx-1.5'
        />
      </a>
      <a href='https://twitter.com/_MagnumAI' target='_blank' rel='noopener noreferrer'>
        <Icon
          variant='Twitter'
          tw='hover:text-[#1da1f2] transition-all duration-200 ease-in mx-1.5'
        />
      </a>
      <a
        href='https://www.youtube.com/channel/UCO0kMjGg9Gan6hDAUugILgg'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Icon
          variant='YouTube'
          tw='hover:text-[#ff0000] transition-all duration-200 ease-in mx-1.5'
        />
      </a>
      <a
        href='https://magiceden.io/marketplace/magnum_ai'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Icon
          variant='MagicEden'
          tw='hover:text-[#f94e9b] transition-all duration-200 ease-in mx-1.5'
        />
      </a>
      <a
        href='https://opensea.io/collection/magnum-ai'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Icon
          variant='OpenSea'
          tw='hover:text-[#15b2e5] transition-all duration-200 ease-in mx-1.5'
        />
      </a>
    </div>
  </FooterBase>
);
