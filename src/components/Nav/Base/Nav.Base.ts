import tw, { styled } from 'twin.macro';
import { BaseNavProps } from '../nav.types';

export const StyledBase = styled.nav<BaseNavProps>(({ sticky }) => [
  tw`fixed top-0 left-0 max-h-20 py-2 pl-4 md:px-4 w-screen font-primary text-base font-light text-white transition-all duration-700 ease-linear border-b border-neutral-700 flex justify-between items-center z-20`,
  sticky && tw`bg-neutral-900`,
]);
