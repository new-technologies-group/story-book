import { ReactNode } from 'react';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'text';
  social?: boolean;
}

export interface SocialButtonProps extends ButtonProps {
  icon:
    | 'twitter'
    | 'discord'
    | 'linkedin'
    | 'twitch'
    | 'instagram'
    | 'magicEden'
    | 'openSea'
    | 'youTube'
    | 'famousFox';
  children: ReactNode;
  onClick?: () => void;
}
