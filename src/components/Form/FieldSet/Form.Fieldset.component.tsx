import React from 'react';
import tw, { styled } from 'twin.macro';

const _FieldSet = styled.fieldset`
  ${tw`border border-neutral-700 rounded-xl p-2.5 transition-[border] duration-300 delay-200 ease-linear`}
  & legend {
    ${tw`px-2.5`}
  }
`;

export const FieldSet: React.FC = ({ children, ...props }) => (
  <_FieldSet {...props}>{children}</_FieldSet>
);
