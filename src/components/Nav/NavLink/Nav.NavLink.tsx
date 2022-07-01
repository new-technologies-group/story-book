import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { NavLinkProps } from '../Nav.types';
import 'twin.macro';

export const StyledNavLink: React.FC<NavLinkProps> = ({ hash, modal, to, children }) => {
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
