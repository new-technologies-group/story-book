import React, { FC, ReactNode } from 'react';
import tw, { styled, css } from 'twin.macro';
import { Icon } from '../Icons';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'text' | 'outline' | 'gradient';
}

export const Button = styled.button<ButtonProps>(({ variant = 'text' }) => [
  tw`m-2 text-white font-bold py-4 px-6 rounded-full transition-all duration-200 ease-in hover:-translate-y-0.5`,
  css`
    background-size: 125% !important;
    &:hover {
      background-size: 100% !important;
    }
  `,

  // variant === 'primary' &&
  //   tw`bg-gradient-to-b from-purple-100 to-purple-600 hover:(bg-gradient-to-b from-purple-200 to-purple-500)`,
  // variant === 'secondary' &&
  //   tw`bg-gradient-to-b from-neutral-600 to-neutral-800 hover:(bg-gradient-to-b from-neutral-700 to-neutral-900)`,
  variant === 'secondary' &&
    css`
      ${tw`border border-neutral-700 hover:border-neutral-600`}
      &:hover {
        box-shadow: 0 0 5px #fff, -3px 0 10px var(--neutral-500),
          3px 0 10px var(--neutral-500), 0 0 6px var(--neutral-500),
          -3px 0 9px var(--neutral-500), 3px 0 9px var(--neutral-600);
      }
    `,
  variant === 'text' &&
    css`
      &:hover {
        text-shadow: 0 0 2px var(--neutral-50), 0 0 5px var(--neutral-50),
          0 0 1px var(--neutral-50), 0 0 9px var(--neutral-50), 0 0 1px var(--neutral-200),
          0 0 10px var(--neutral-200);
      }
    `,
  variant === 'primary' &&
    css`
      background: linear-gradient(var(--neutral-900), var(--neutral-900)) padding-box,
        linear-gradient(to left, var(--purple-700), var(--pink-500)) border-box;
      border-radius: 50em;
      border: 1px solid transparent;
      &:hover {
        box-shadow: 0 0 5px #fff, -3px 0 10px var(--pink-500),
          3px 0 10px var(--purple-500), 0 0 6px var(--purple-500),
          -3px 0 9px var(--pink-500), 3px 0 9px var(--pink-600);
      }
    `,
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
