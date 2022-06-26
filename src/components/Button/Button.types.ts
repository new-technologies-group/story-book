import { ReactNode } from 'react';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'text' | 'outline' | 'gradient';
}

export interface SocialButtonProps extends ButtonProps {
  icon:
    | 'Twitter'
    | 'Discord'
    | 'Linkedin'
    | 'Twitch'
    | 'Instagram'
    | 'MagicEden'
    | 'OpenSea'
    | 'YouTube'
    | 'FamousFox';
  children: ReactNode;
  onClick?: () => void;
}
