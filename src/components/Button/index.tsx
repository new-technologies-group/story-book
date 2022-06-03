import React, { FC, ReactNode } from 'react';
import tw, { styled, css } from 'twin.macro';
import { Icon } from '../Icons';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'text' | 'outline';
}

export const Button = styled.button<ButtonProps>(({ variant = 'text' }) => [
  tw`m-2 text-neutral-50 font-bold py-4 px-6 rounded-2xl transition-all duration-200 ease-in hover:-translate-y-0.5`,
  css`
    background-size: 125% !important;
    &:hover {
      background-size: 100% !important;
    }
  `,

  variant === 'primary' &&
    tw`bg-gradient-to-b from-purple-100 to-purple-600 hover:(bg-gradient-to-b from-purple-200 to-purple-500)`,
  variant === 'secondary' &&
    tw`bg-gradient-to-b from-neutral-600 to-neutral-800 hover:(bg-gradient-to-b from-neutral-700 to-neutral-900)`,
  variant === 'outline' && tw`border border-neutral-700 hover:border-neutral-600`,
  variant === 'text' && tw`hover:text-neutral-300`,
]);

export interface SocialButtonProps extends ButtonProps {
  icon:
    | 'Twitter'
    | 'Discord'
    | 'Linkedin'
    | 'Twitch'
    | 'Instagram'
    | 'MagicEden'
    | 'OpenSea'
    | 'YouTube';
  children: ReactNode;
  onClick?: () => any;
}

const SocialBtn = styled(Button)<SocialButtonProps>(({ icon }) => [
  tw`flex justify-center items-center hover:text-current`,
  icon === 'Twitter' &&
    css`
      background: linear-gradient(135deg, #1da1f2, #0c81c9);
    `,
  ,
  icon === 'Discord' &&
    css`
      background: linear-gradient(135deg, #5865f2, #3443ef);
    `,
  icon === 'Linkedin' &&
    css`
      background: linear-gradient(135deg, #0077b5, #139cde);
    `,
  ,
  icon === 'Twitch' &&
    css`
      background: linear-gradient(135deg, #9146ff, #6441a5);
    `,
  ,
  icon === 'Instagram' &&
    css`
      background: linear-gradient(
        135deg,
        #285aeb 0%,
        #d6249f 5%,
        #fd5949 65%,
        #fdf497 95%,
        #fdf497 99%
      );
    `,
  icon === 'MagicEden' &&
    css`
      background: linear-gradient(135deg, #900ce9, #f94e9b);
    `,
  icon === 'OpenSea' &&
    css`
      background: linear-gradient(135deg, #1868b7, #15b2e5);
    `,
  icon === 'YouTube' &&
    css`
      background: linear-gradient(135deg, #ff0000, #c50505);
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

export const WalletButton = (props: any) => {
  return (
    <Button variant='outline' tw='p-2 rounded-md' {...props}>
      <Icon variant='Wallet' />
    </Button>
  );
};
