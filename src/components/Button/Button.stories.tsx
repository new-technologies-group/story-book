import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { Button } from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      table: {
        defaultValue: { summary: 'text' },
      },
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'outline', 'text'],
      },
    },
  },
};

const Template: Story = props => (
  <Button variant='text' {...props}>
    {props.variant}
  </Button>
);

export const Usage = Template.bind({});
Usage.args = { variant: 'text' };
