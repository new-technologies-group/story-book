import React from 'react';
import { SocialIcon } from './Icon.Social.component';
import { SocialData } from '../Icons.types';

export const SocialIconLink = ({ to, variant }: SocialData) => {
  return (
    <a
      href={to}
      target='_blank'
      rel='noopener noreferrer'
    >
      <SocialIcon variant={variant} />
    </a>
  );
};
