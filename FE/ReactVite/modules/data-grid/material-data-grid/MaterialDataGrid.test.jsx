import { render } from '@testing-library/react';
import { MaterialDataGrid } from './MaterialDataGrid';

// Mock the StyledEngineProvider since it's a context provider
jest.mock('@mui/material', () => ({
  StyledEngineProvider: ({ children }) => children,
}));

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'name', headerName: 'Name' },
];
const rows = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
];
const rowIdField = 'id';
const getRowStyle = () => '';

describe('MaterialDataGrid', () => {
  it('renders without errors', () => {
    const { container } = render(
      <MaterialDataGrid
        columns={columns}
        rows={rows}
        rowIdField={rowIdField}
        getRowStyle={getRowStyle}
      />
    );

    expect(container).toBeInTheDocument();
  });

  test('Checked component matches snapshot', () => {

    const { asFragment } = render(
      <MaterialDataGrid
        columns={columns}
        rows={rows}
        rowIdField={rowIdField}
        getRowStyle={getRowStyle}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

});
