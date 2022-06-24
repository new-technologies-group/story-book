import React, { FC, useState, useRef, useEffect } from 'react';
import { Base, Overlay, SideNav, Hamburger, Logo } from './nav.components';
import { NavProps } from './nav.types';
import { Button } from '../Button';
import { Icon } from '../Icons';
import 'twin.macro';

export * from './nav.types';
export { NavLink } from './nav.components';

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
  }, []);

  return (
    <>
      <Base
        ref={navRef}
        sticky={sticky}
      >
        <Logo />
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
              <li
                key={i}
                onClick={() => setActiveBurger(false)}
              >
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
      <Overlay
        active={activeBurger}
        onClick={() => setActiveBurger(false)}
      />
    </>
  );
};
