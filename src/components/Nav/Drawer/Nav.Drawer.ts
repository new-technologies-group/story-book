import tw, { styled, css } from 'twin.macro';
import { SideNavProps } from '../nav.types';

export const StyledDrawer = styled.div<SideNavProps>(({ active }) => [
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
