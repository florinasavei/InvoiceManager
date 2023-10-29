import { render } from '@testing-library/react';
import { Moon } from './Moon';

test('Checked component matches snapshot', () => {
  const { asFragment } = render(<Moon/>);
  expect(asFragment()).toMatchSnapshot();
});
