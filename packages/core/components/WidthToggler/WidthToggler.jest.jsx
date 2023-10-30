import { render, fireEvent } from '@testing-library/react';

import { WidthToggler } from './WidthToggler'; // Update the import path as needed

describe('WidthToggler Component', () => {


  test('ThemeSwitcher component matches snapshot for light theme', () => {
    const { asFragment } = render(
      <WidthToggler isExpanded={false} toggleExpand={jest.fn()} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render the component with "Expand" button when not expanded', () => {
    const { getByTestId, getByText } = render(
      <WidthToggler isExpanded={false} toggleExpand={jest.fn()} />
    );

    const widthToggler = getByTestId('WidthToggler');
    const expandButton = getByText('Expand');

    expect(widthToggler).toBeInTheDocument();
    expect(expandButton).toBeInTheDocument();
  });

  it('should render the component with "Collapse" button when expanded', () => {
    const { getByTestId, getByText } = render(
      <WidthToggler isExpanded={true} toggleExpand={jest.fn()} />
    );

    const widthToggler = getByTestId('WidthToggler');
    const collapseButton = getByText('Collapse');

    expect(widthToggler).toBeInTheDocument();
    expect(collapseButton).toBeInTheDocument();
  });

  it('should call the toggleExpand function when a button is clicked', () => {
    const toggleExpandMock = jest.fn();
    const { getByText } = render(
      <WidthToggler isExpanded={false} toggleExpand={toggleExpandMock} />
    );

    const expandButton = getByText('Expand');
    fireEvent.click(expandButton);

    expect(toggleExpandMock).toHaveBeenCalledWith(true);
  });
});
