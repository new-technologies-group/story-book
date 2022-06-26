import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { Icon } from '../../components/Icons';

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
          'Twitter',
          'Discord',
          'Linkedin',
          'Instagram',
          'Twitch',
          'MagicEden',
          'Solana',
          'OpenSea',
          'SolScan',
          'YouTube',
          'Wallet',
          'Add',
          'Subtract',
          'FamousFox',
        ],
      },
    },
  },
};

const Template: Story = props => (
  <Icon
    variant='Twitter'
    {...props}
  >
    Heading
  </Icon>
);

export const Usage = Template.bind({});
Usage.args = { variant: 'Twitter' };
