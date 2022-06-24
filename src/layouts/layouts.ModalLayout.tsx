/* eslint-disable no-unused-expressions */
/* eslint-disable react/function-component-definition */
import React, { FC, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../components/Modal';
import { ModalContext } from '../context';

interface ModalLayoutProps {
  back?: boolean;
  heading?: string;
}

export const ModalLayout: FC<ModalLayoutProps> = ({ children, back, heading }) => {
  const { isOpen, toggleModal } = useContext(ModalContext);
  const navigate = useNavigate();

  const handleClose = () => {
    toggleModal && toggleModal();
    if (back) navigate(-1);
  };

  useEffect(() => {
    toggleModal && toggleModal();
  }, [toggleModal]);

  return (
    <Modal
      handleClose={handleClose}
      open={isOpen}
      heading={heading}
    >
      {children}
    </Modal>
  );
};
