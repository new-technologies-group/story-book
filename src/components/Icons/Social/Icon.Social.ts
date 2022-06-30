import tw, { styled } from 'twin.macro';
import { SocialData } from '../Icons.types';
import { Icon } from '../Icon.component';

export const SocialIcon = styled(Icon)<SocialData>(({ variant }) => [
  variant === 'twitter' &&
    tw`hover:text-[#1da1f2] transition-all duration-200 ease-in mx-1.5`,
  variant === 'discord' &&
    tw`hover:text-[#5865f2] transition-all duration-200 ease-in mx-1.5`,
  variant === 'magicEden' &&
    tw`hover:text-[#f94e9b] transition-all duration-200 ease-in mx-1.5`,
  variant === 'youTube' &&
    tw`hover:text-[#ff0000] transition-all duration-200 ease-in mx-1.5`,
  variant === 'openSea' &&
    tw`hover:text-[#15b2e5] transition-all duration-200 ease-in mx-1.5`,
]);
