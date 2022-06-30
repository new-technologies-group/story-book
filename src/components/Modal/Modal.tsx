import React from 'react';
import tw, { styled } from 'twin.macro';
import { Divider } from '../Divider';
import { Icon } from '../Icons';
import { ModalProps } from './Modal.types';

const StyledWrapper = styled.div`
  ${tw`flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none bg-[rgba(25,25,25,.5)]`}
`;

const StyledInnerWrapper = styled.div`
  ${tw`relative w-full p-2.5 md:w-3/4 lg:w-2/3 xl:w-1/2 h-screen my-6 mx-auto lg:h-[90vh] overflow-y-scroll`}
`;

const StyledContentWrapper = styled.div`
  ${tw`p-2.5 border-0 rounded-xl shadow-lg relative flex flex-col w-full h-full bg-neutral-900 outline-none focus:outline-none overflow-y-scroll`}
`;

const StyledHeader = styled.div`
  ${tw`relative p-5 w-11/12 mx-auto rounded-t`}
`;

const StyledBody = styled.div`
  ${tw`relative p-5 flex-auto w-11/12 mx-auto transition-all duration-300 ease-linear`}
`;

export const Modal: React.FC<ModalProps> = ({ heading, open, handleClose, children }) => {
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  const handleBlur = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === wrapperRef.current) handleClose();
  };

  if (open)
    return (
      <StyledWrapper
        ref={wrapperRef}
        onClick={handleBlur}
      >
        <StyledInnerWrapper>
          <StyledContentWrapper>
            <StyledHeader>
              <h1>{heading}</h1>
              <Icon
                variant='close'
                tw='text-2xl cursor-pointer absolute top-3 -right-5'
                onClick={handleClose}
              />
              <Divider />
            </StyledHeader>
            <StyledBody>{children}</StyledBody>
          </StyledContentWrapper>
        </StyledInnerWrapper>
      </StyledWrapper>
    );
  return null;
};
