import { render } from '@testing-library/react';
import { Expand } from './Expand';

test('Checked component matches snapshot', () => {
  const { asFragment } = render(<Expand/>);
  expect(asFragment()).toMatchSnapshot();
});
