import React from 'react';
import tw, { styled } from 'twin.macro';
import { Input } from '../Input/Form.Input';
import { CheckBoxProps } from '../Form.types';

export const StyledSwitch = styled(Input)<CheckBoxProps>(({ lg }) => [
  // base
  tw`h-5 w-8 relative bg-neutral-600 rounded-full cursor-pointer appearance-none transition duration-300 checked:bg-purple-200`,
  // toggle
  tw`after:(h-5 w-5 absolute bg-neutral-50 flex justify-center items-center rounded-full border border-neutral-700 top-0 left-0 transform transition duration-200) checked:after:(translate-x-4)`,

  lg && tw`h-7 w-12 p-2.5 after:(p-2.5 h-7 w-7) checked:after:(translate-x-6)`,
]);

export const Switch = React.forwardRef<HTMLInputElement, CheckBoxProps>(
  (props, checkRef) => {
    return (
      <div tw='h-[fit-content] flex items-end'>
        <StyledSwitch
          ref={checkRef}
          {...props}
          type='checkbox'
        />
      </div>
    );
  }
);
