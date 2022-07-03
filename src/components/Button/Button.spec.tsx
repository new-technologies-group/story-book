import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { Button } from '.';

test('it works', () => {
  const { container } = render(<Button variant='primary'>Primary</Button>);
  expect(container.firstChild).toMatchSnapshot();
  expect(container.firstChild).toHaveStyleRule('border-radius', '50em');
});
