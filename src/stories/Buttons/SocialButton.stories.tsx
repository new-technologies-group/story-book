import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { SocialButton } from '../../components/Button';

export default {
  title: 'Social Button',
  component: SocialButton,
  argTypes: {
    icon: {
      table: {
        defaultValue: { summary: 'null' },
      },
      control: {
        type: 'select',
        options: ['twitter', 'discord', 'linkedin', 'twitch', 'instagram', 'magic eden'],
      },
    },
    variant: {
      control: false,
      table: {
        defaultValue: { summary: 'null' },
      },
    },
  },
};

const Template: Story = props => (
  <SocialButton icon='twitter' {...props}>
    {props.icon}
  </SocialButton>
);

export const Usage = Template.bind({});
Usage.args = { icon: 'twitter' };
