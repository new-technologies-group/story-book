import tw, { styled } from 'twin.macro';
import { SideNavProps } from '../Nav.types';

export const StyledOverlay = styled.div<SideNavProps>(({ active }) => [
  active &&
    tw`fixed w-full h-full top-0 left-0 bg-[rgba(0,0,0,.5)] transition-all duration-300 ease-linear z-10`,
]);
