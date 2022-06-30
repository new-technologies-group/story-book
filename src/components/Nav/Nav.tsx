import React, { FC, useState, useRef, useEffect } from 'react';
import { Button } from '../Button';
import { StyledBase } from './Base';
import { StyledOverlay } from './Overlay';
import { StyledDrawer } from './Drawer';
import { StyledHamburger } from './Hamburger';
import { StyledLogo } from './Logo';
import { StyledNavLink } from './NavLink';
import { SocialIconLink, socialList } from '../Icons';
import { NavProps } from './Nav.types';
import 'twin.macro';

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
      <StyledBase
        ref={navRef}
        sticky={sticky}
      >
        <StyledLogo />
        <div>
          <Button
            variant='secondary'
            tw='p-2 rounded-md hover:translate-y-0'
            onClick={() => {
              setActiveBurger(!activeBurger);
              if (activeBurger) sideRef.current.focus();
            }}
          >
            <StyledHamburger active={activeBurger} />
          </Button>
        </div>
        <StyledDrawer
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
            {links.map(link => (
              <li key={link.to}>
                <StyledNavLink
                  hash={link.hash}
                  modal={link.modal}
                  to={link.to}
                  onClick={() => setActiveBurger(false)}
                >
                  {link.text}
                </StyledNavLink>
              </li>
            ))}
          </ul>
          <div tw='md:ml-auto w-1/2 flex justify-around'>
            {socialList.map(social => (
              <SocialIconLink
                key={social.variant}
                to={social.to}
                variant={social.variant}
              />
            ))}
          </div>
        </StyledDrawer>
      </StyledBase>
      <StyledOverlay
        active={activeBurger}
        onClick={() => setActiveBurger(false)}
      />
    </>
  );
};
