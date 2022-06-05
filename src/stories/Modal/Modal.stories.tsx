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
    <Modal open={isOpen} handleClose={handleClose} heading='Modal'>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et laudantium a officia
      harum minima quibusdam mollitia assumenda, aut voluptate pariatur sequi hic quisquam
      quis architecto beatae voluptatibus cum numquam ut! Doloremque dolores repudiandae
      possimus error sint repellendus pariatur, itaque dignissimos aut sunt ex quasi
      veritatis minus magnam quam, deleniti culpa!
      <div tw='flex flex-end w-full'>
        <Button variant='primary'>Submit</Button>
      </div>
    </Modal>
  );
};

export const Usage = Template.bind({});
