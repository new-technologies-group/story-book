/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import tw, { styled } from 'twin.macro';
import { Input } from '../Input/Form.Input.component';

export const _CheckBox = styled(Input)`
  accent-color: var(--purple-400);
  &:checked {
    content: url("data:image/svg+xml,%3Csvg stroke='white' fill='white' stroke-width='0' viewBox='0 0 1024 1024' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z'%3E%3C/path%3E%3C/svg%3E");
  }
  ${tw`w-5 h-5 cursor-pointer checked:text-purple-500 border border-neutral-700 focus:ring-0 transition-all duration-200 ease-linear`}
`;

export const CheckBox = React.forwardRef<HTMLInputElement>((props, checkRef) => {
  return (
    <div tw='block'>
      <label tw='inline-flex items-center'>
        <_CheckBox
          type='checkbox'
          {...props}
          ref={checkRef}
        />
      </label>
    </div>
  );
});
