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
  <div tw='md:px-20 lg:px-40'>
    <Card.Base
      featured={featured}
      featuredInverse={featuredInverse}
      featuredSides={featuredSides}
    >
      <Card.Header featured={featured || featuredInverse || featuredSides}>
        <h1>Heading</h1>
      </Card.Header>
      <Card.Body>
        <Card.Section>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, nesciunt
          doloremque. Ut, earum exercitationem distinctio dolor ex voluptatum dolore
          inventore officiis dignissimos suscipit vitae impedit quaerat delectus aliquam
          odio obcaecati sequi sapiente corrupti alias ullam dolores? Cum eos harum
          facere?
        </Card.Section>
        <div tw='md:(grid grid-cols-12 gap-4)'>
          <Card.Section tw='md:(col-span-6)'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,
            consequatur dolor! Necessitatibus asperiores quis quo temporibus aliquid
            repellendus quam perspiciatis!
          </Card.Section>
          <Card.Section tw='md:(col-span-6)'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,
            consequatur dolor! Necessitatibus asperiores quis quo temporibus aliquid
            repellendus quam perspiciatis!
          </Card.Section>
        </div>
      </Card.Body>
    </Card.Base>
  </div>
);

export const Generic = Template.bind({});

export const Featured = Template.bind({});
Featured.args = { featured: true };

export const FeaturedInverse = Template.bind({});
FeaturedInverse.args = { featuredInverse: true };

export const FeaturedSides = Template.bind({});
FeaturedSides.args = { featuredSides: true };
