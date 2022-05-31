import React, { FC, ReactNode } from 'react';
import tw, { styled, css } from 'twin.macro';
import { Icon } from '../Icons';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'text' | 'outline';
}

export const Button = styled.button<ButtonProps>(({ variant = 'text' }) => [
  tw`m-2 text-neutral-50 font-bold p-4 rounded-lg hover:scale-105 transition-all`,

  variant === 'primary' && tw`bg-gradient-to-b from-purple-100 to-purple-600`,
  variant === 'secondary' && tw`bg-neutral-700`,
  variant === 'outline' && tw`border-2 border-neutral-700`,
]);

interface SocialButtonProps extends ButtonProps {
  icon: 'Twitter' | 'Discord' | 'Linkedin' | 'Twitch' | 'Instagram' | 'MagicEden';
  children: ReactNode;
  onClick?: () => any;
}

const SocialBtn = styled(Button)<SocialButtonProps>(({ icon }) => [
  tw`flex justify-center items-center`,
  icon === 'Twitter' && tw`bg-social-twitter`,
  icon === 'Discord' && tw`bg-social-discord`,
  icon === 'Linkedin' && tw`bg-social-linkedin`,
  icon === 'Twitch' && tw`bg-social-twitch`,
  icon === 'Instagram' && tw`bg-social-instagram`,
  icon === 'MagicEden' &&
    css`
      background: linear-gradient(135deg, #900ce9, #f94e9b);
    `,
]);

export const SocialButton: FC<SocialButtonProps> = ({ icon, children, ...props }) => {
  return (
    <SocialBtn icon={icon} {...props}>
      <div tw='flex justify-center items-center'>
        {children}
        <Icon variant={icon as string} tw='ml-2' />
      </div>
    </SocialBtn>
  );
};
