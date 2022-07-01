import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from '.';
import { Group, Label } from '..';
import 'twin.macro';

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = () => (
  <Group tw='w-80'>
    <Label htmlFor='firstName'>First Name</Label>
    <Input
      type='text'
      name='firstName'
    />
  </Group>
);

export const Usage = Template.bind({});
