import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';
import { ButtonProps } from './Button.types';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      table: { defaultValue: { summary: 'primary' } },
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'text'],
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => (
  <Button {...(args as ButtonProps)}>Button</Button>
);

export const Primary = Template.bind({});
Primary.args = { variant: 'primary' };

export const Secondary = Template.bind({});
Secondary.args = { variant: 'secondary' };

export const Text = Template.bind({});
Text.args = { variant: 'text' };
