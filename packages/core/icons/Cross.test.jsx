import { render } from '@testing-library/react';
import { Cross } from './Cross';

test('Checked component matches snapshot', () => {
  const { asFragment } = render(<Cross/>);
  expect(asFragment()).toMatchSnapshot();
});
