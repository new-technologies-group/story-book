import React from 'react';
import tw, { styled } from 'twin.macro';
import { Icon } from '../Icons';

const ModalContainer = styled.div`
  ${tw`flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-[rgba(25,25,25,.5)]`}
`;

const InnerModalContainer = styled.div`
  ${tw`relative w-auto h-auto my-6 mx-auto max-w-3xl max-h-[90vh] overflow-y-scroll`}
`;

const ModalContentContainer = styled.div`
  ${tw`border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-neutral-900 outline-none focus:outline-none`}
`;

const ModalHeader = styled.div`
  ${tw`flex items-start justify-between p-5 w-11/12 mx-auto border-b border-solid border-neutral-700 rounded-t`}
`;

const ModalBody = styled.div`
  ${tw`relative p-6 flex-auto`}
`;

export interface ModalProps {
  heading?: string;
  open: boolean;
  handleClose: () => void;
}
export const Modal: React.FC<ModalProps> = ({ heading, open, handleClose, children }) => {
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  const handleBlur = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === wrapperRef.current) handleClose();
  };

  if (open)
    return (
      <>
        <ModalContainer ref={wrapperRef} onClick={handleBlur}>
          <InnerModalContainer>
            <ModalContentContainer>
              <ModalHeader>
                <h1>{heading}</h1>
                <Icon
                  variant='Close'
                  tw='text-2xl cursor-pointer'
                  onClick={handleClose}
                />
              </ModalHeader>
              <ModalBody>{children}</ModalBody>
            </ModalContentContainer>
          </InnerModalContainer>
        </ModalContainer>
      </>
    );
  return null;
};
