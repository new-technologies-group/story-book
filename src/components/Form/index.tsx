import React from 'react';
import tw, { styled } from 'twin.macro';

// const _Input = React.forwardRef<HTMLInputElement>((props, ref) => (
//   <input ref={ref} {...props} />
// ));

export const Input = styled.input`
  outline-width: 0;
  ${tw`p-2.5 bg-neutral-800 rounded-xl focus-visible:(border border-purple-500) transition-[border] duration-300 delay-200 ease-linear`}
`;

// const _TextArea = React.forwardRef<HTMLTextAreaElement>((props, ref) => (
//   <textarea ref={ref} {...props} />
// ));

export const TextArea = styled.textarea`
  outline-width: 0;
  ${tw`p-2.5 bg-neutral-800 rounded-xl focus-visible:(border border-purple-500) transition-[border] duration-300 delay-200 ease-linear`}
`;

// const _Select = React.forwardRef<HTMLSelectElement>((props, ref) => (
//   <select ref={ref} {...props}>
//     {props.children}
//   </select>
// ));

export const Select = styled.select`
  outline-width: 0;
  ${tw`p-2.5 bg-neutral-800 rounded-xl focus-visible:(border border-purple-500) transition-[border] duration-300 delay-200 ease-linear`}
`;

export const FieldSet = styled.fieldset`
  outline-width: 0;
  ${tw`border border-neutral-700 rounded-xl p-2.5 focus-visible:(border border-purple-500) transition-[border] duration-300 delay-200 ease-linear`}
  & legend {
    ${tw`px-2.5`}
  }
`;

const _Switch = styled(Input)`
  ${tw`rounded-full relative cursor-pointer h-7 w-12 p-2.5 appearance-none bg-neutral-600 checked:bg-purple-400 transition duration-300 after:(scale-125 absolute p-2.5 h-7 w-7 flex justify-center items-center rounded-full bg-neutral-800 border border-neutral-700 top-0 left-0 transform transition duration-300) checked:after:(scale-125 translate-x-6)`}
`;

export const Switch = React.forwardRef<HTMLInputElement>((props, checkRef) => {
  return (
    <div tw='h-[fit-content] flex items-end'>
      <_Switch ref={checkRef} {...props} type='checkbox' />
    </div>
  );
});

const _CheckBox = styled.input`
  accent-color: var(--purple-400);
  &:checked {
    content: url("data:image/svg+xml,%3Csvg stroke='white' fill='white' stroke-width='0' viewBox='0 0 1024 1024' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z'%3E%3C/path%3E%3C/svg%3E");
  }
  ${tw`w-5 h-5 checked:text-purple-500 border border-neutral-700 focus:ring-0 transition-all duration-200 ease-linear`}
`;

export const CheckBox = React.forwardRef<HTMLInputElement>((props, checkRef) => {
  return (
    <div tw='block'>
      <label tw='inline-flex items-center'>
        <_CheckBox type='checkbox' {...props} ref={checkRef} />
      </label>
    </div>
  );
});

{
  /* <div class="block">
  <div class="mt-2">
    <label class="inline-flex items-center">
      <input type="checkbox" class="w-6 h-6 text-green-600 border-0 rounded-md focus:ring-0" checked />
      <span class="ml-2">Success checkbox</span>
    </label>
  </div>
</div> */
}
