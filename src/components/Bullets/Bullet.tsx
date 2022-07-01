import React from 'react';
import tw, { styled, css } from 'twin.macro';
import { BulletProps } from './Bullet.types';

const StyledBullet = styled.div<BulletProps>(({ inProgress, complete }) => [
  tw`flex justify-center items-center mx-5 w-4 h-4 rounded-full bg-gradient-to-b from-purple-500 to-pink-300 transition-all duration-300 ease-linear`,
  (inProgress || complete) &&
    css`
      box-shadow: 0 0 5px #fff, -3px 0 10px var(--pink-500), 3px 0 10px var(--purple-500),
        0 0 6px var(--purple-500), -3px 0 9px var(--pink-500), 3px 0 9px var(--pink-600);
    `,
]);

export const Bullet = ({ complete, inProgress }: BulletProps) => (
  <StyledBullet
    complete={complete}
    inProgress={inProgress}
  >
    {!complete && <div tw='w-3 h-3 m-auto rounded-full bg-neutral-900' />}
  </StyledBullet>
);
