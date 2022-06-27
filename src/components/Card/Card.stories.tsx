import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import * as Card from '.';
import 'twin.macro';

export default {
  title: 'Card',
  component: Card.Base,
  argTypes: {
    featured: {
      table: { defaultValue: { summary: false } },
      control: 'boolean',
    },
    featuredInverse: {
      table: { defaultValue: { summary: false } },
      control: 'boolean',
    },
    featuredSides: {
      table: { defaultValue: { summary: false } },
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof Card.Base>;

const Template: ComponentStory<typeof Card.Base> = ({
  featured,
  featuredInverse,
  featuredSides,
}) => (
  <Card.Base
    featured={featured}
    featuredInverse={featuredInverse}
    featuredSides={featuredSides}
  >
    <Card.Header featured={featured || featuredInverse || featuredSides}>
      Heading
    </Card.Header>
    <Card.Body>
      <Card.Section shaded={!featured && !featuredInverse && !featuredSides}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, nesciunt
        doloremque. Ut, earum exercitationem distinctio dolor ex voluptatum dolore
        inventore officiis dignissimos suscipit vitae impedit quaerat delectus aliquam
        odio obcaecati sequi sapiente corrupti alias ullam dolores? Cum eos harum facere?
      </Card.Section>
      <div tw='md:(grid grid-cols-12 gap-4)'>
        <Card.Section
          shaded={!featured && !featuredInverse && !featuredSides}
          tw='md:(col-span-6)'
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, consequatur
          dolor! Necessitatibus asperiores quis quo temporibus aliquid repellendus quam
          perspiciatis!
        </Card.Section>
        <Card.Section
          shaded={!featured && !featuredInverse && !featuredSides}
          tw='md:(col-span-6)'
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, consequatur
          dolor! Necessitatibus asperiores quis quo temporibus aliquid repellendus quam
          perspiciatis!
        </Card.Section>
      </div>
    </Card.Body>
  </Card.Base>
);

export const Usage = Template.bind({});
