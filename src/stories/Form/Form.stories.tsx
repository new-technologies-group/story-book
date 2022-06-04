import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import * as Form from '../../components/Form';

export default {
  title: 'Form',
  argTypes: {},
};

const InputTemplate: Story = props => (
  <form>
    <Form.Input {...props} />
  </form>
);

const TextAreaTemplate: Story = props => <Form.TextArea {...props} />;

export const Input = InputTemplate.bind({});
export const TextArea = TextAreaTemplate.bind({});
