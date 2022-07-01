import React from 'react';
import { StyledOverlay } from '../Nav/Overlay';
import 'twin.macro';

export const Spinner = () => (
  <StyledOverlay
    active
    tw='w-screen h-screen flex justify-center items-center'
  >
    <div tw='w-32 flex justify-center items-center'>
      <img
        src='https://magnum-images.s3.amazonaws.com/brand/spinner.gif'
        alt='loading...'
      />
    </div>
  </StyledOverlay>
);
