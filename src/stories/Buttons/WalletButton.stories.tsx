import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { WalletButton } from '../../components/Button';

export default {
  title: 'Wallet Button',
  component: WalletButton,
  argTypes: {},
};

const Template: Story = props => (
  <WalletButton icon='Twitter' {...props}>
    {props.icon}
  </WalletButton>
);

export const Usage = Template.bind({});
