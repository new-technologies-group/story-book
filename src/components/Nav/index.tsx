import React, { FC, ReactNode, useState, useRef, useEffect } from 'react';
import tw, { styled, css } from 'twin.macro';
import { Button } from '../Button';
import { Icon } from '../Icons';

export interface NavProps extends BaseNavProps {
  links: JSX.Element[];
}
export interface BaseNavProps {
  sticky: boolean;
}

export interface SideNavProps {
  active: boolean;
}

const Base = styled.nav<BaseNavProps>(({ sticky }) => [
  tw`fixed top-0 left-0 py-2 px-4 w-screen font-primary bg-neutral-900 text-base font-light text-white transition-all border-b border-neutral-700 flex justify-between items-end z-20`,
  sticky && tw`fixed top-0`,
]);

const SideNav = styled.div<SideNavProps>(({ active }) => [
  tw`fixed bottom-0 right-[-100%] w-full md:w-1/2 lg:w-1/3 bg-neutral-900 border-l border-neutral-700 transition-all duration-300 ease-linear flex flex-col justify-between`,
  active && tw`right-0`,

  css`
    & ul {
      ${tw`mx-auto text-center`}
      & li {
        ${tw`p-5 cursor-pointer border-b border-neutral-700 hover:(bg-neutral-700 text-neutral-900)`}
      }
    }
  `,
]);

const Hamburger = ({ active }: SideNavProps) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='1.2em'>
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

export const Nav: FC<NavProps> = ({ sticky, links }) => {
  const navRef = useRef<HTMLElement | null>(null);
  const [activeBurger, setActiveBurger] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const navHeightSetter = () => {
      if (navRef.current) {
        setHeight(navRef.current.offsetHeight);
      }
    };
    navHeightSetter();
  }, [navRef]);

  useEffect(() => console.log(height), [height]);
  return (
    <Base ref={navRef} sticky={sticky}>
      <div tw='w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/6'>
        <img src='https://magnum-images.s3.amazonaws.com/brand/brand.png' alt='magnum' />
      </div>
      <div>
        <Button
          variant='outline'
          tw='p-2 rounded-md hover:translate-y-0'
          onClick={() => setActiveBurger(!activeBurger)}
        >
          <Hamburger active={activeBurger} />
        </Button>
      </div>
      <SideNav active={activeBurger} style={{ height: `calc(100vh - ${height}px)` }}>
        <ul>
          {links.map((link, i) => (
            <li key={i}>{link}</li>
          ))}
        </ul>
        <div>
          <a href='http://' target='_blank' rel='noopener noreferrer'>
            <Icon variant='Discord' />
          </a>
          <a href='http://' target='_blank' rel='noopener noreferrer'>
            <Icon variant='Twitter' />
          </a>
          <a href='http://' target='_blank' rel='noopener noreferrer'>
            <Icon variant='YouTube' />
          </a>
          <a href='http://' target='_blank' rel='noopener noreferrer'>
            <Icon variant='MagicEden' />
          </a>
          <a href='http://' target='_blank' rel='noopener noreferrer'>
            <Icon variant='OpenSea' />
          </a>
        </div>
      </SideNav>
    </Base>
  );
};
