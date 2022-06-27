import React from 'react';
import tw, { styled } from 'twin.macro';

export const _Legend = styled.legend`
  ${tw`px-2.5`}
`;

export const Legend: React.FC = ({ children, ...props }) => (
  <_Legend {...props}>{children}</_Legend>
);
