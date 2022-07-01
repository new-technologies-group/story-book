import React from 'react';
import tw, { styled, css } from 'twin.macro';
import { Icon } from '../../Icons';
import { SocialButtonProps } from '../Button.types';
import { Button } from '../Button';

const StyledSocialButton = styled(Button)<SocialButtonProps>(({ icon }) => [
  tw`flex justify-center items-center hover:text-white`,
  css`
    &:hover {
      text-shadow: 0 0;
    }
  `,

  icon === 'twitter' &&
    css`
      background: linear-gradient(135deg, #1da1f2, #0c81c9);
    `,

  icon === 'discord' &&
    css`
      background: linear-gradient(135deg, #5865f2, #3443ef);
    `,

  icon === 'linkedin' &&
    css`
      background: linear-gradient(135deg, #0077b5, #139cde);
    `,

  icon === 'twitch' &&
    css`
      background: linear-gradient(135deg, #9146ff, #6441a5);
    `,

  icon === 'instagram' &&
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

  icon === 'magicEden' &&
    css`
      background: linear-gradient(135deg, #900ce9, #f94e9b);
    `,

  icon === 'openSea' &&
    css`
      background: linear-gradient(135deg, #1868b7, #15b2e5);
    `,

  icon === 'youTube' &&
    css`
      background: linear-gradient(135deg, #ff0000, #c50505);
    `,

  icon === 'famousFox' &&
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
    <StyledSocialButton
      social
      icon={icon}
      {...props}
    >
      <div tw='flex justify-center items-center'>
        {children}
        <Icon
          variant={icon}
          tw='ml-2'
        />
      </div>
    </StyledSocialButton>
  );
};
