import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import tw, { styled, css } from 'twin.macro';
import { BaseNavProps, SideNavProps, NavLinkProps } from './nav.types';

export const Base = styled.nav<BaseNavProps>(({ sticky }) => [
  tw`fixed top-0 left-0 max-h-20 py-2 pl-4 md:px-4 w-screen font-primary text-base font-light text-white transition-all duration-700 ease-linear border-b border-neutral-700 flex justify-between items-center z-20`,
  sticky && tw`bg-neutral-900`,
]);

export const Overlay = styled.div<SideNavProps>(({ active }) => [
  active &&
    tw`fixed w-full h-full bg-[rgba(0,0,0,.5)] transition-all duration-300 ease-linear z-10`,
]);

export const SideNav = styled.div<SideNavProps>(({ active }) => [
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

export const Logo = () => (
  <Link
    to='/'
    onClick={() => window.scrollTo(0, 0)}
    tw='w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/6'
  >
    <img
      src='https://magnum-images.s3.amazonaws.com/brand/brand.png'
      alt='magnum'
    />
  </Link>
);

export const Hamburger = ({ active }: SideNavProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width='1.5em'
  >
    <rect
      fill='white'
      x='2.22'
      y={!active ? '7.5' : '10.59'}
      width='19.56'
      height='2.82'
      rx='1.26'
      ry='1.26'
      transform={active ? 'translate(12 -4.97) rotate(45)' : ''}
      tw='transition-all duration-300 ease-linear'
    />
    <rect
      fill='white'
      x='2.22'
      y={!active ? '13.68' : '10.59'}
      width='19.56'
      height='2.82'
      rx='1.26'
      ry='1.26'
      transform={active ? 'translate(-4.97 12) rotate(-45)' : ''}
      tw='transition-all duration-300 ease-linear'
    />
  </svg>
);

export const NavLink: React.FC<NavLinkProps> = ({ hash, modal, to, children }) => {
  const location = useLocation();

  if (hash)
    return (
      <a
        href={to}
        tw='w-full p-5'
      >
        <div tw='w-full'>{children}</div>
      </a>
    );
  return (
    <Link
      to={to}
      state={{ backgroundLocation: modal ? location : null }}
      tw='w-full p-5'
    >
      <div tw='w-full'>{children}</div>
    </Link>
  );
};
