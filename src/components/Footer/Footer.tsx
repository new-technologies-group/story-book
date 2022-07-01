import React from 'react';
import tw, { styled } from 'twin.macro';
import { SocialIconLink, socialList } from '../Icons';

export const StyledFooter = styled.footer`
  ${tw`w-screen pt-4 pb-2 px-4 border-t border-neutral-700 bg-neutral-900 flex flex-col justify-center items-center`}
`;

export const Footer = () => (
  <StyledFooter>
    <p tw='whitespace-nowrap text-sm'>&#169; {new Date().getFullYear()} Magnum Ai</p>
    <div tw='flex mt-4'>
      {socialList.map(social => (
        <SocialIconLink
          key={social.variant}
          to={social.to}
          variant={social.variant}
        />
      ))}
    </div>
  </StyledFooter>
);
