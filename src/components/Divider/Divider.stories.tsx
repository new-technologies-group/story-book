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

const Template: ComponentStory<typeof Divider> = props => (
  <div tw='w-screen h-40'>
    <Divider {...props} />
  </div>
);

export const Usage = Template.bind({});
