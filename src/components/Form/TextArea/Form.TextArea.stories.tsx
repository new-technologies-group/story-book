import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextArea } from '.';
import { Group, Label } from '..';
import 'twin.macro';

export default {
  title: 'TextArea',
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = () => (
  <Group tw='w-80'>
    <Label htmlFor='textArea'>TextArea</Label>
    <TextArea name='textArea' />
  </Group>
);

export const Usage = Template.bind({});
