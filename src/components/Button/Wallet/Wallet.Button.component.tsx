import React from 'react';
import { Button } from '../Button.component';
import { Icon } from '../../Icons';
import 'twin.macro';

export const WalletButton = (props: any) => {
  return (
    <Button
      variant='outline'
      tw='p-2 rounded-md'
      {...props}
    >
      <Icon variant='wallet' />
    </Button>
  );
};
