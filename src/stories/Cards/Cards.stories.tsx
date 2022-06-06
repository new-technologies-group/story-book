import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import * as Card from '../../components/Card';

export default {
  title: 'Card',
  argTypes: {},
};

const CardTemplate: Story = props => (
  <div tw='grid grid-cols-12 gap-4'>
    <div tw='col-span-12 lg:col-span-6'>
      <Card.Base {...props}>
        <Card.Header>
          <h1>Card</h1>
        </Card.Header>
        <Card.Body>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eum
            deserunt vitae voluptate nesciunt minima porro aliquid soluta magni voluptatum
            ex explicabo ea pariatur odit quia, doloribus optio repellendus, sit cum esse
            aut asperiores assumenda. Blanditiis, dignissimos ratione nemo, eligendi ab
            debitis tempora ipsam suscipit accusamus consequuntur magni libero unde ad
            aperiam dicta non? Provident odit aliquam nisi ut error perferendis sequi
            nobis doloremque neque laboriosam recusandae fugit inventore rerum, illum
            reiciendis. Consectetur quod ipsa laborum provident perspiciatis? Molestias
            quam a cum quae eligendi consequatur, totam quibusdam reiciendis dignissimos
            earum beatae enim animi excepturi neque magni atque odit, aperiam aut ratione,
            fugiat numquam. Voluptatibus voluptate odit rerum omnis? Voluptatum aperiam
            dolor modi possimus beatae saepe laborum eum repellendus recusandae. Adipisci
            quia impedit minima odio ipsa doloribus fugit, tenetur in, beatae dicta
            debitis consectetur. Amet voluptate nulla impedit delectus non ea ipsum
            laboriosam. Quasi, hic nihil possimus porro ratione eius quas!
          </p>
          <Card.Section shaded>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque aspernatur
            dignissimos autem nemo quis quas laudantium ex porro laboriosam reiciendis.
          </Card.Section>
        </Card.Body>
      </Card.Base>
    </div>
  </div>
);

const FeaturedCardTemplate: Story = props => (
  <div tw='grid grid-cols-12 gap-4'>
    <div tw='col-span-12 lg:col-span-6'>
      <Card.Base {...props} featured>
        <Card.Header>
          <h1>Card</h1>
        </Card.Header>
        <Card.Body>
          <Card.Section>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque aspernatur
            dignissimos autem nemo quis quas laudantium ex porro laboriosam reiciendis.
          </Card.Section>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eum
            deserunt vitae voluptate nesciunt minima porro aliquid soluta magni voluptatum
            ex explicabo ea pariatur odit quia, doloribus optio repellendus, sit cum esse
            aut asperiores assumenda. Blanditiis, dignissimos ratione nemo, eligendi ab
            debitis tempora ipsam suscipit accusamus consequuntur magni libero unde ad
            aperiam dicta non? Provident odit aliquam nisi ut error perferendis sequi
            nobis doloremque neque laboriosam recusandae fugit inventore rerum, illum
            reiciendis. Consectetur quod ipsa laborum provident perspiciatis? Molestias
            quam a cum quae eligendi consequatur, totam quibusdam reiciendis dignissimos
            earum beatae enim animi excepturi neque magni atque odit, aperiam aut ratione,
            fugiat numquam. Voluptatibus voluptate odit rerum omnis? Voluptatum aperiam
            dolor modi possimus beatae saepe laborum eum repellendus recusandae. Adipisci
            quia impedit minima odio ipsa doloribus fugit, tenetur in, beatae dicta
            debitis consectetur. Amet voluptate nulla impedit delectus non ea ipsum
            laboriosam. Quasi, hic nihil possimus porro ratione eius quas!
          </p>
        </Card.Body>
      </Card.Base>
    </div>
  </div>
);

export const GenericCard = CardTemplate.bind({});
export const FeaturedCard = FeaturedCardTemplate.bind({});
