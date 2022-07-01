import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
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
          'magicEden',
          'solana',
          'openSea',
          'solScan',
          'youTube',
          'wallet',
          'add',
          'subtract',
          'famousFox',
        ],
      },
    },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = props => <Icon {...props} />;

export const Usage = Template.bind({});
Usage.args = { variant: 'twitter' };
