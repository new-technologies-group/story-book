import React from 'react';
import tw, { styled } from 'twin.macro';
import { Input } from '../Input/Form.Input';

export const StyledSwitch = styled(Input)`
  ${tw`rounded-full relative cursor-pointer h-7 w-12 p-2.5 appearance-none bg-neutral-600 checked:bg-purple-400 transition duration-300 after:(scale-125 absolute p-2.5 h-7 w-7 flex justify-center items-center rounded-full bg-neutral-800 border border-neutral-700 top-0 left-0 transform transition duration-300) checked:after:(scale-125 translate-x-6)`}
`;

export const Switch = React.forwardRef<HTMLInputElement>((props, checkRef) => {
  return (
    <div tw='h-[fit-content] flex items-end'>
      <StyledSwitch
        ref={checkRef}
        {...props}
        type='checkbox'
      />
    </div>
  );
});
