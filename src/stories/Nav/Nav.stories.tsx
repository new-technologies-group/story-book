import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { Nav } from '../../components/Nav';

export default {
  title: 'Nav',
  component: Nav,
  argTypes: {
    sticky: {
      table: {
        defaultValue: { summary: 'boolean' },
      },
      control: {
        type: 'boolean',
      },
    },
  },
};

const Template: Story = props => <Nav links={[<a>Roadmap</a>]} {...props}></Nav>;

export const Usage = Template.bind({});
