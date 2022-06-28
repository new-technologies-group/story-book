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

export const Twitter = Template.bind({});
Twitter.args = { icon: 'twitter' };

export const Discord = Template.bind({});
Discord.args = { icon: 'discord' };

export const Linkedin = Template.bind({});
Linkedin.args = { icon: 'linkedin' };

export const Twitch = Template.bind({});
Twitch.args = { icon: 'twitch' };

export const Instagram = Template.bind({});
Instagram.args = { icon: 'instagram' };

export const MagicEden = Template.bind({});
MagicEden.args = { icon: 'magicEden' };

export const OpenSea = Template.bind({});
OpenSea.args = { icon: 'openSea' };

export const YouTube = Template.bind({});
YouTube.args = { icon: 'youTube' };
