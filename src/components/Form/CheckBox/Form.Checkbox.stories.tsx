import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CheckBox } from '.';
import { Group, Label } from '..';

export default {
  title: 'CheckBox',
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = () => {
  const ref = React.useRef(null);
  return (
    <Group>
      <Label>CheckBox</Label>
      <CheckBox ref={ref} />
    </Group>
  );
};

export const Usage = Template.bind({});
