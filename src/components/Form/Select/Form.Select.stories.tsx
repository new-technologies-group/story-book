import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from '.';
import { Group, Label } from '..';
import 'twin.macro';

export default {
  title: 'Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = () => (
  <Group tw='w-80'>
    <Label htmlFor='options'>Select One</Label>
    <Select name='options'>
      <option value='1'>Option 1</option>
      <option value='2'>Option 2</option>
      <option value='3'>Option 3</option>
      <option value='4'>Option 4</option>
      <option value='5'>Option 5</option>
    </Select>
  </Group>
);

export const Usage = Template.bind({});
