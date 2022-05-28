import { FC, createElement } from 'react';
import { SiTwitter, SiDiscord, SiLinkedin, SiInstagram, SiTwitch } from 'react-icons/si';
import MagicEden from './MagicEden';
import Solana from './Solana';

export interface Icons {
  twitter: 'twitter';
  discord: 'discord';
  linkedin: 'linkedin';
  instagram: 'instagram';
  twitch: 'twitch';
  'magic eden': 'magic eden';
  solana: 'solana';
}

export interface IconProps {
  variant: string;
}

const elements = {
  twitter: SiTwitter,
  discord: SiDiscord,
  linkedin: SiLinkedin,
  instagram: SiInstagram,
  twitch: SiTwitch,
  'magic eden': MagicEden,
  solana: Solana,
};

export const Icon: FC<IconProps> = ({ variant, ...props }) => {
  if (!variant) return null;
  return createElement(elements[variant as keyof Icons], { ...props });
};
