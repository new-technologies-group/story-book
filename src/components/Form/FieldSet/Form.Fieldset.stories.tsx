import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FieldSet } from '.';
import { Legend, Input, Group, Label } from '..';
import { Button } from '../../Button';
import 'twin.macro';

export default {
  title: 'FieldSet',
  component: FieldSet,
} as ComponentMeta<typeof FieldSet>;

const Template: ComponentStory<typeof FieldSet> = () => (
  <FieldSet>
    <Legend>Fieldset</Legend>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, sunt. Lorem, ipsum
      dolor sit amet consectetur adipisicing elit. Deleniti ratione soluta nam minus
      iusto?
    </p>
    <form>
      <Group>
        <Label htmlFor='email'>Email</Label>
        <Input type='email' />
      </Group>
      <Group>
        <Label htmlFor='password'>Password</Label>
        <Input type='password' />
      </Group>
      <Group tw='flex-row justify-end'>
        <Button variant='text'>Cancel</Button>
        <Button variant='primary'>Submit</Button>
      </Group>
    </form>
  </FieldSet>
);

export const Usage = Template.bind({});
