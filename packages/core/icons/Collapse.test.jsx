import { render } from '@testing-library/react';
import { Collapse } from './Collapse';

test('Checked component matches snapshot', () => {
  const { asFragment } = render(<Collapse title="Collapse" />);
  expect(asFragment()).toMatchSnapshot();
});
