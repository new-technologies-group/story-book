import React, {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

interface ModalContext {
  isOpen: boolean;
  toggleModal: () => void;
}

const defaultState = {
  isOpen: false,
  toggleModal: () => null,
};

export const ModalContext = createContext<ModalContext>(defaultState);

export const ModalProvider: FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(defaultState.isOpen);

  const toggleModal = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

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

  const context = useMemo(() => ({ isOpen, toggleModal }), [isOpen, toggleModal]);

  return <ModalContext.Provider value={context}>{children}</ModalContext.Provider>;
};

export function useModal() {
  return useContext(ModalContext);
}
