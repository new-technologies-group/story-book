import tw, { styled, css } from 'twin.macro';
import { BaseNavProps, SideNavProps } from '../Nav.types';

export const _Base = styled.nav<BaseNavProps>(({ sticky }) => [
  tw`fixed top-0 left-0 max-h-20 py-2 pl-4 md:px-4 w-screen font-primary text-base font-light text-white transition-all duration-700 ease-linear border-b border-neutral-700 flex justify-between items-center z-20`,
  sticky && tw`bg-neutral-900`,
]);

export const _Overlay = styled.div<SideNavProps>(({ active }) => [
  active &&
    tw`fixed w-full h-full bg-[rgba(0,0,0,.5)] transition-all duration-300 ease-linear z-10`,
]);

export const _SideNav = styled.div<SideNavProps>(({ active }) => [
  tw`fixed bottom-0 right-[-100%] w-full md:w-1/2 lg:w-1/3 bg-neutral-900 border-l border-neutral-700 transition-all duration-300 ease-linear flex flex-col justify-between z-10`,
  active && tw`right-0`,

  css`
    & ul {
      ${tw`w-full mx-auto text-center`}
      & li {
        ${tw`w-full border-b border-neutral-700 hover:(bg-neutral-700 text-neutral-900) transition-all duration-200 ease-linear`}
      }
    }
  `,
]);
