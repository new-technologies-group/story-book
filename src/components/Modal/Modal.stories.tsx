import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from '.';
import { Button } from '../Button';

export default {
  title: 'Modal',
  component: Modal,
  argTypes: {
    heading: {
      table: { defaultValue: { summary: '' } },
    },
    open: {
      table: { defaultValue: { summary: false } },
    },
    handleClose: {
      table: {
        describe: 'Function for closing modal',
      },
    },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Open Modal</Button>
      <Modal
        open={openModal}
        handleClose={() => setOpenModal(false)}
        heading='Modal'
      >
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla temporibus ipsam
          in, odio laborum totam perferendis optio fuga sunt ad? Nostrum corrupti tempora,
          aliquam voluptatum magnam debitis delectus sunt eum ipsum asperiores? Et minus
          pariatur, ad cum unde illo quaerat accusantium qui inventore perspiciatis quod
          nemo dolorum totam deleniti vel eos optio quia sit autem, suscipit adipisci?
          Obcaecati dicta laboriosam illum quos non. Minima aperiam odit repellendus non,
          hic molestiae possimus numquam soluta dolore nostrum et vitae autem ratione
          quibusdam ullam delectus dignissimos, qui temporibus.
        </p>
      </Modal>
    </>
  );
};

export const Usage = Template.bind({});
