import React, { useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { Modal } from '../../components/Modal';
import { Button } from '../../components';

export default {
  title: 'Modal',
  component: Modal,
  argTypes: {},
};

const Template: Story = () => {
  const [isOpen, setIsopen] = useState<boolean>(true);
  const handleClose = () => setIsopen(false);
  return (
    <Modal
      open={isOpen}
      handleClose={handleClose}
      heading='Modal'
    >
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et laudantium a officia
      harum minima quibusdam mollitia assumenda, aut voluptate pariatur sequi hic quisquam
      quis architecto beatae voluptatibus cum numquam ut! Doloremque dolores repudiandae
      possimus error sint repellendus pariatur, itaque dignissimos aut sunt ex quasi
      veritatis minus magnam quam, deleniti culpa! Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Delectus velit fugiat, praesentium nihil dolores, explicabo quo
      beatae, dolorum natus laborum aspernatur obcaecati enim commodi rem possimus
      eveniet? Optio accusamus mollitia, repellendus sed tempora corporis id aut
      architecto provident earum eius aspernatur nostrum nisi debitis nulla, iste cum!
      Iusto sapiente magnam a facere, amet aliquam odio et vel non tempore voluptate
      laboriosam animi quia dicta saepe asperiores consectetur consequuntur exercitationem
      assumenda eos excepturi rem, praesentium error. Aperiam rerum quos inventore
      accusamus dolores? Est, quam odit nisi asperiores corporis omnis doloribus libero
      non maiores totam cupiditate. Aperiam corrupti doloremque porro quidem deleniti
      commodi alias nemo maiores accusantium! Quis, repudiandae? Beatae impedit, facere
      reprehenderit accusantium earum sapiente doloremque eaque nisi sunt consequatur
      rerum odit corporis quasi obcaecati non aliquid itaque! Neque illum ea sapiente! In,
      maxime. Repudiandae sit debitis provident nulla, facilis reiciendis cum amet earum
      hic voluptate, similique deleniti ea eveniet quo officiis, mollitia eaque dolores
      maxime aperiam harum! Fuga placeat ipsam eum minima autem assumenda consequatur,
      obcaecati culpa facere, quos odio, amet libero. Vel ullam possimus quas quam,
      pariatur recusandae voluptatibus necessitatibus eligendi explicabo, tempore
      nesciunt. Odit cupiditate possimus cum quae a debitis porro, ullam quasi animi
      laudantium dicta quod. Blanditiis, aspernatur. Ex provident corrupti enim tenetur
      vero error nulla ipsa voluptatibus dolore, dolorum id repellat consectetur cumque
      eaque exercitationem eius architecto perferendis. Consequuntur nisi ipsam deserunt?
      Ut magnam exercitationem fugit adipisci possimus voluptatibus accusamus aperiam
      saepe quidem quasi culpa aspernatur, sunt natus veniam recusandae ea cupiditate unde
      autem magni, asperiores vero minus! Veniam dolorem a totam illum nulla officiis
      alias ad sed quia quidem quod aut beatae et sunt, modi ullam error atque in hic quae
      iure sit eius saepe. Odio fuga doloribus ratione, quibusdam possimus fugit, nobis
      facere commodi nulla dicta asperiores! Odit eaque provident sapiente dignissimos
      alias. Consequatur harum, veritatis vitae unde sed nobis reiciendis necessitatibus,
      alias, accusamus repellat odio excepturi sequi nam iusto illo? Quasi voluptas
      blanditiis asperiores nemo, tenetur voluptatibus neque ducimus ipsam veritatis qui
      obcaecati exercitationem vero, temporibus expedita iure facere excepturi dolor
      maiores modi cum laboriosam? Doloribus labore laborum possimus nulla perferendis ab,
      ipsa earum rem est fuga praesentium reprehenderit, quod, excepturi porro at corporis
      nisi. Explicabo, accusamus architecto autem libero amet impedit corporis quo, id
      nesciunt non harum quibusdam quas ipsam doloribus obcaecati qui. Dolorum ullam quasi
      est corrupti quod reiciendis rerum fuga totam libero dolores, assumenda, aliquam
      excepturi reprehenderit cumque, autem vel.
      <div tw='flex flex-end w-full'>
        <Button variant='primary'>Submit</Button>
      </div>
    </Modal>
  );
};

export const Usage = Template.bind({});
