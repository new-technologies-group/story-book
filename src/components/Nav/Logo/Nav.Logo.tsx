import React from 'react';
import { Link } from 'react-router-dom';
import 'twin.macro';

export const StyledLogo = () => (
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
