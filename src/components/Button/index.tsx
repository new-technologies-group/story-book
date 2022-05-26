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
  icon: 'twitter' | 'discord' | 'linkedin' | 'twitch' | 'instagram' | 'magic eden';
  children: ReactNode;
  onClick?: () => any;
}

const SocialBtn = styled(Button)<SocialButtonProps>(({ icon }) => [
  tw`flex justify-center items-center`,
  icon === 'twitter' && tw`bg-social-twitter`,
  icon === 'discord' && tw`bg-social-discord`,
  icon === 'linkedin' && tw`bg-social-linkedin`,
  icon === 'twitch' && tw`bg-social-twitch`,
  icon === 'instagram' && tw`bg-social-instagram`,
  icon === 'magic eden' &&
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
