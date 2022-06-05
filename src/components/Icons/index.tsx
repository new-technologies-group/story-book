import React, { SVGProps } from 'react';
import * as icons from './Icons';
export interface Icons {
  Twitter: 'Twitter';
  Discord: 'Discord';
  Linkedin: 'Linkedin';
  Instagram: 'Instagram';
  Twitch: 'Twitch';
  MagicEden: 'MagicEden';
  Solana: 'Solana';
  OpenSea: 'OpenSea';
  SolScan: 'SolScan';
  YouTube: 'YouTube';
  Wallet: 'Wallet';
  Close: 'Close';
  Add: 'Add';
  Subtract: 'Subtract';
}
export interface IconProps extends SVGProps<any> {
  variant: string;
}

export const Icon = ({ variant, ...props }: IconProps) => {
  if (!variant) return null;
  return React.createElement(icons[variant as keyof Icons], { ...props });
};
