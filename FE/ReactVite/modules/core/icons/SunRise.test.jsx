import { render } from '@testing-library/react';
import { SunRise } from './SunRise';

test('Checked component matches snapshot', () => {
  const { asFragment } = render(<SunRise/>);
  expect(asFragment()).toMatchSnapshot();
});
