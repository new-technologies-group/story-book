import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '.';
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

const Template: ComponentStory<typeof Button> = props => (
  <Button {...(props as ButtonProps)}>Button</Button>
);

export const Usage = Template.bind({});
