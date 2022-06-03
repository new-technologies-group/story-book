import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { Footer } from '../../components/Footer';

export default {
  title: 'Footer',
  component: Footer,
  argTypes: {},
};

const Template: Story = () => <Footer />;

export const Usage = Template.bind({});
