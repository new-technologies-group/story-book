import React from 'react';
import tw, { styled, css } from 'twin.macro';
import { SocialButtonProps } from '../Button.types';
import { Button } from '../Button.component';
import { Icon } from '../../Icons';

const SocialBtn = styled(Button)<SocialButtonProps>(({ icon }) => [
  tw`flex justify-center items-center hover:text-white`,

  css`
    &:hover {
      text-shadow: 0 0;
    }
  `,

  icon === 'Twitter' &&
    css`
      background: linear-gradient(135deg, #1da1f2, #0c81c9);
    `,

  icon === 'Discord' &&
    css`
      background: linear-gradient(135deg, #5865f2, #3443ef);
    `,

  icon === 'Linkedin' &&
    css`
      background: linear-gradient(135deg, #0077b5, #139cde);
    `,

  icon === 'Twitch' &&
    css`
      background: linear-gradient(135deg, #9146ff, #6441a5);
    `,

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

  icon === 'FamousFox' &&
    css`
      background: linear-gradient(135deg, #ce6f3e, #fb923c);
    `,
]);

export const SocialButton: React.FC<SocialButtonProps> = ({
  icon,
  children,
  ...props
}) => {
  return (
    <SocialBtn
      icon={icon}
      {...props}
    >
      <div tw='flex justify-center items-center'>
        {children}
        <Icon
          variant={icon as string}
          tw='ml-2'
        />
      </div>
    </SocialBtn>
  );
};
