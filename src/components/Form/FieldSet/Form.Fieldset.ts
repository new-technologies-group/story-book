import tw, { styled } from 'twin.macro';

export const FieldSet = styled.fieldset`
  ${tw`border border-neutral-700 rounded-xl p-2.5 transition-[border] duration-300 delay-200 ease-linear`}
  & legend {
    ${tw`px-2.5`}
  }
`;
