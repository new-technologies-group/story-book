import React, { FC, useState, useRef, useEffect } from 'react';
import tw, { styled, css } from 'twin.macro';
import { Button } from '../Button';
import { Icon } from '../Icons';

export interface NavProps {
  links: JSX.Element[];
}
export interface BaseNavProps {
  sticky: boolean;
}

export interface SideNavProps {
  active: boolean;
}

const Base = styled.nav<BaseNavProps>(({ sticky }) => [
  tw`max-h-20 py-2 px-4 w-screen font-primary bg-neutral-900 text-base font-light text-white transition-all duration-300 ease-linear border-b border-neutral-700 flex justify-between items-center z-20`,
  sticky && tw`fixed top-0 left-0`,
]);

const Overlay = styled.div<SideNavProps>(({ active }) => [
  active &&
    tw`fixed w-full h-full bg-[rgba(0,0,0,.5)] transition-all duration-300 ease-linear`,
]);

const SideNav = styled.div<SideNavProps>(({ active }) => [
  tw`fixed bottom-0 right-[-100%] w-full md:w-1/2 lg:w-1/3 bg-neutral-900 border-l border-neutral-700 transition-all duration-300 ease-linear flex flex-col justify-between z-10`,
  active && tw`right-0`,

  css`
    & ul {
      ${tw`w-full mx-auto text-center`}
      & li {
        ${tw`w-full p-5 cursor-pointer border-b border-neutral-700 hover:(bg-neutral-700 text-neutral-900) transition-all duration-200 ease-linear`}
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

export const Nav: FC<NavProps> = ({ links }) => {
  const navRef = useRef<HTMLElement | null>(null);
  const sideRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [activeBurger, setActiveBurger] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(0);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const navHeightSetter = () => {
      if (navRef.current) {
        setHeight(navRef.current.offsetHeight);
      }
    };
    navHeightSetter();
  }, [navRef]);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > height || window.scrollY > 80) setSticky(true);
      else setSticky(false);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  });

  return (
    <>
      <Base ref={navRef} sticky={sticky}>
        <div tw='w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/6'>
          <img
            src='https://magnum-images.s3.amazonaws.com/brand/brand.png'
            alt='magnum'
          />
        </div>
        <div>
          <Button
            variant='outline'
            tw='p-2 rounded-md hover:translate-y-0'
            onClick={() => {
              setActiveBurger(!activeBurger);
              if (activeBurger) sideRef.current.focus();
            }}
          >
            <Hamburger active={activeBurger} />
          </Button>
        </div>
        <SideNav
          ref={sideRef}
          active={activeBurger}
          style={{
            height: height !== 0 ? `calc(100vh - ${height}px)` : 'calc(100vh - 5rem)',
          }}
          onBlur={e =>
            !e.currentTarget.contains(e.relatedTarget) && setActiveBurger(false)
          }
        >
          <ul>
            {links.map((link, i) => (
              <li key={i} onClick={() => setActiveBurger(false)}>
                {link}
              </li>
            ))}
          </ul>
          <div tw='md:ml-auto w-1/2 flex justify-around'>
            <a
              href='https://discord.gg/tUDWfAhxaR'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Icon
                variant='Discord'
                tw='hover:text-[#5865f2] transition-all duration-200 ease-in'
              />
            </a>
            <a
              href='https://twitter.com/_MagnumAI'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Icon
                variant='Twitter'
                tw='hover:text-[#1da1f2] transition-all duration-200 ease-in'
              />
            </a>
            <a
              href='https://www.youtube.com/channel/UCO0kMjGg9Gan6hDAUugILgg'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Icon
                variant='YouTube'
                tw='hover:text-[#ff0000] transition-all duration-200 ease-in'
              />
            </a>
            <a
              href='https://magiceden.io/marketplace/magnum_ai'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Icon
                variant='MagicEden'
                tw='hover:text-[#f94e9b] transition-all duration-200 ease-in'
              />
            </a>
            <a
              href='https://opensea.io/collection/magnum-ai'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Icon
                variant='OpenSea'
                tw='hover:text-[#15b2e5] transition-all duration-200 ease-in'
              />
            </a>
          </div>
        </SideNav>
      </Base>
      <Overlay active={activeBurger} onClick={() => setActiveBurger(false)} />
    </>
  );
};
