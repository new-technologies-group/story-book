import React from 'react';
import { Overlay } from '../Nav/nav.components';
import 'twin.macro';

export const Spinner = () => (
  <Overlay active>
    <div tw='w-32 flex justify-center items-center'>
      <img
        src='https://magnum-images.s3.amazonaws.com/brand/spinner.gif'
        alt='loading...'
      />
    </div>
  </Overlay>
);
