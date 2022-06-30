import React from 'react';
import { Outlet } from 'react-router-dom';
import { Nav, Footer } from '../../components';
import { NavProps } from '../../components/Nav/Nav.types';

export const Main: React.FC<NavProps> = ({ links }) => {
  return (
    <>
      <header>
        <Nav links={links} />
      </header>
      <Outlet />
      <Footer />
    </>
  );
};
