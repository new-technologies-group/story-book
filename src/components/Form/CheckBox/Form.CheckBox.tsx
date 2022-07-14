/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import tw, { styled, css } from 'twin.macro';
import { Input } from '../Input/Form.Input';
import { CheckBoxProps } from '../Form.types';

export const StyledCheckBox = styled(Input)<CheckBoxProps>(({ lg }) => [
  css`
    accent-color: var(--purple-200);

    ${tw`w-5 h-5 cursor-pointer checked:text-purple-200 border border-neutral-700 focus:ring-0 transition-all duration-200 ease-linear`}
  `,

  lg && tw`w-7 h-7`,
]);

export const CheckBox = React.forwardRef<HTMLInputElement, CheckBoxProps>(
  (props, checkRef) => {
    return (
      <div tw='block'>
        <label tw='inline-flex items-center'>
          <StyledCheckBox
            type='checkbox'
            {...props}
            ref={checkRef}
          />
        </label>
      </div>
    );
  }
);
