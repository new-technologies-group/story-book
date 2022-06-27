import React from 'react';
import { Outlet } from 'react-router-dom';
import { Nav, Footer } from '../../components';

export const Main: React.FC<{ links: JSX.Element[] }> = ({ links }) => {
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
