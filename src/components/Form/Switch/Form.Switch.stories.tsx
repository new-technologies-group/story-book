import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Switch } from '.';
import { Group, Label } from '..';

export default {
  title: 'Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = () => {
  const ref = React.useRef(null);
  return (
    <Group>
      <Label>Switch</Label>
      <Switch ref={ref} />
    </Group>
  );
};

export const Usage = Template.bind({});
