// TODO: Fix this
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState, useEffect } from 'react';

interface ModalContext {
  isOpen: boolean;
  toggleModal?: () => void;
}

const defaultState = {
  isOpen: false,
};

export const ModalContext = createContext<ModalContext>(defaultState);

export const ModalProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(defaultState.isOpen);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const ROOT = document.getElementById('root');

  useEffect(() => {
    if (isOpen) {
      (ROOT as HTMLDivElement).style.height = '100vh';
      (ROOT as HTMLDivElement).style.overflowY = 'hidden';
    } else {
      (ROOT as HTMLDivElement).style.height = '';
      (ROOT as HTMLDivElement).style.overflowY = '';
    }
  }, [ROOT, isOpen]);

  return (
    <ModalContext.Provider value={{ isOpen, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export function useModal() {
  return React.useContext(ModalContext);
}
