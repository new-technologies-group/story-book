import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import * as Form from '../../components/Form';

export default {
  title: 'Form',
  argTypes: {},
};

const styles = {
  width: '400px',
  height: '250px',
};

const InputTemplate: Story = props => (
  <Form.Input {...props} invalid tw='w-40' style={{ width: '400px' }} />
);

const TextAreaTemplate: Story = props => <Form.TextArea {...props} style={styles} />;

const SelectTemplate: Story = props => (
  <Form.Select {...props} style={{ width: '400px' }}>
    <option>Option one</option>
  </Form.Select>
);

const FieldSetTemplate: Story = props => (
  <Form.FieldSet {...props} style={styles}>
    <legend>Fieldset</legend>
  </Form.FieldSet>
);

const SwitchTemplate: Story = props => <Form.Switch {...props} />;

const CheckBoxTemplate: Story = props => <Form.CheckBox {...props} />;

export const Input = InputTemplate.bind({});
export const TextArea = TextAreaTemplate.bind({});
export const Select = SelectTemplate.bind({});
export const FieldSet = FieldSetTemplate.bind({});
export const Switch = SwitchTemplate.bind({});
export const CheckBox = CheckBoxTemplate.bind({});
