import React, { FC, createElement } from 'react';
import * as icons from './Icons';
export interface Icons {
  Twitter: 'Twitter';
  Discord: 'Discord';
  Linkedin: 'Linkedin';
  Instagram: 'Instagram';
  Twitch: 'Twitch';
  MagicEden: 'MagicEden';
  Solana: 'Solana';
}

export interface IconProps {
  variant: string;
}

export const Icon: FC<IconProps> = ({ variant, ...props }) => {
  if (!variant) return null;
  return createElement(icons[variant as keyof Icons], { ...props });
};
