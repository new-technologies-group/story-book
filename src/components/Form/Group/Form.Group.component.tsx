import React from 'react';
import tw, { styled } from 'twin.macro';

export const _Group = styled.div`
  ${tw`mx-3 my-5 flex flex-col`}
`;

export const Group: React.FC = ({ children, ...args }) => (
  <_Group {...args}>{children}</_Group>
);
