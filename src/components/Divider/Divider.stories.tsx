import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Divider } from '.';
import 'twin.macro';

export default {
  title: 'Divider',
  component: Divider,
  argTypes: {
    col: {
      table: {
        defaultValue: { summary: false },
      },
      control: 'boolean',
    },
    row: {
      table: {
        defaultValue: { summary: true },
      },
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = args => (
  <div tw='w-screen h-screen flex justify-center items-center'>
    <Divider {...args} />
  </div>
);

export const Col = Template.bind({});
Col.args = { col: true };

export const Row = Template.bind({});
Row.args = { row: true };
