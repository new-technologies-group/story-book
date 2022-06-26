import React from 'react';
import { BrowserRouter } from 'react-router-dom';
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

const Template: Story = props => (
  <BrowserRouter>
    <Nav
      links={[<a>Roadmap</a>]}
      {...props}
    ></Nav>
  </BrowserRouter>
);

export const Usage = Template.bind({});
