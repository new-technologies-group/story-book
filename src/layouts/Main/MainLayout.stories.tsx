import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Main } from '.';

export default {
  title: 'Main Layout',
  component: Main,
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = ({ children }) => (
  <Main links={[{ hash: true, modal: false, to: '#', text: 'Home' }]}>{children}</Main>
);

export const Usage = Template.bind({});
