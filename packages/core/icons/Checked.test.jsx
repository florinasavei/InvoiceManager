import { render } from '@testing-library/react';
import { Checked } from './Checked';

test('Checked component matches snapshot', () => {
  const { asFragment } = render(<Checked title="Checkmark" />);
  expect(asFragment()).toMatchSnapshot();
});
