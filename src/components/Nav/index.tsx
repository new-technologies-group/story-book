import React, { FC, ReactNode, useState } from 'react';
import tw, { styled, css } from 'twin.macro';
import { Button } from '../Button';

export interface NavProps {
  sticky: boolean;
}

const Base = styled.nav<NavProps>(({ sticky }) => [
  tw`py-2 px-4 w-screen font-primary bg-neutral-900 text-base font-light text-white transition-all border-b border-neutral-700 flex justify-between items-end`,
  sticky && tw`fixed`,
]);

const Hamburger = ({ active }: { active: boolean }) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='1.2em'>
    <rect
      fill='var(--neutral-50)'
      x='2.22'
      y={!active ? '7.5' : '10.59'}
      width='19.56'
      height='2.82'
      rx='1.26'
      ry='1.26'
      transform={active ? 'translate(12 -4.97) rotate(45)' : ''}
    />
    <rect
      fill='var(--neutral-50)'
      x='2.22'
      y={!active ? '13.68' : '10.59'}
      width='19.56'
      height='2.82'
      rx='1.26'
      ry='1.26'
      transform={active ? 'translate(-4.97 12) rotate(-45)' : ''}
    />
  </svg>
);

export const Nav = ({ sticky }: NavProps) => {
  const [activeBurger, setActiveBurger] = useState<boolean>(false);

  return (
    <Base sticky={sticky}>
      <div tw='w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/6'>
        <img src={require('../../assets/brand.png')} alt='magnum' />
      </div>
      <div>
        <Button
          variant='outline'
          tw='p-2 rounded-md'
          onClick={() => setActiveBurger(!activeBurger)}
        >
          <Hamburger active={activeBurger} />
        </Button>
      </div>
    </Base>
  );
};
