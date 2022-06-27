import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SocialButton } from '.';

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
        options: [
          'twitter',
          'discord',
          'linkedin',
          'twitch',
          'instagram',
          'magicEden',
          'openSea',
          'youTube',
        ],
      },
    },
    variant: {
      control: false,
      table: {
        defaultValue: { summary: 'null' },
      },
    },
  },
} as ComponentMeta<typeof SocialButton>;

const Template: ComponentStory<typeof SocialButton> = props => (
  <SocialButton {...props}>Social Button</SocialButton>
);

export const Usage = Template.bind({});
