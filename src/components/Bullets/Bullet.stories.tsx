import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Bullet } from '.';

export default {
  title: 'Bullet',
  component: Bullet,
  argTypes: {
    complete: {
      table: {
        defaultValue: { summary: false },
      },
      control: 'boolean',
    },
    inProgress: {
      table: {
        defaultValue: { summary: false },
      },
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof Bullet>;

const Template: ComponentStory<typeof Bullet> = args => <Bullet {...args} />;

export const General = Template.bind({});

export const Complete = Template.bind({});
Complete.args = { complete: true };

export const InProgress = Template.bind({});
InProgress.args = { inProgress: true };
