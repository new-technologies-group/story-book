import { SVGProps } from 'react';

export type IconList =
  | 'twitter'
  | 'discord'
  | 'linkedin'
  | 'instagram'
  | 'twitch'
  | 'magicEden'
  | 'solana'
  | 'openSea'
  | 'solScan'
  | 'youTube'
  | 'wallet'
  | 'close'
  | 'add'
  | 'subtract'
  | 'back'
  | 'next'
  | 'famousFox';

export type Icons =
  | 'Twitter'
  | 'Discord'
  | 'Linkedin'
  | 'Instagram'
  | 'Twitch'
  | 'MagicEden'
  | 'Solana'
  | 'OpenSea'
  | 'SolScan'
  | 'YouTube'
  | 'Wallet'
  | 'Close'
  | 'Add'
  | 'Subtract'
  | 'Back'
  | 'Next'
  | 'FamousFox';

export interface IconProps extends SVGProps<any> {
  variant: IconList;
}

export interface SocialData {
  variant: 'discord' | 'twitter' | 'youTube' | 'magicEden' | 'openSea';
  to?: string;
}
