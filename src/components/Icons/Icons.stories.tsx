import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { Icon } from '.';

export default {
  title: 'Icon',
  component: Icon,
  argTypes: {
    variant: {
      table: {
        defaultValue: { summary: 'null' },
      },
      control: {
        type: 'select',
        options: [
          'twitter',
          'discord',
          'linkedin',
          'instagram',
          'twitch',
          'magic eden',
          'solana',
        ],
      },
    },
  },
};

const Template: Story = props => (
  <Icon variant='twitter' {...props}>
    Heading
  </Icon>
);

export const Usage = Template.bind({});
Usage.args = { variant: 'twitter' };
