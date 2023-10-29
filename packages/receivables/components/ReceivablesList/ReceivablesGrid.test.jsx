import React from 'react';
import { render } from '@testing-library/react';
import { ReceivablesGrid } from './ReceivablesGrid';

const mockReceivableDTO = {
    Id: 1,
    UniqueReference: 'ABC123',
    OpeningValue: 1000,
    RemainingBalance: 500,
    ComputedDeptPercentage: 50,
    IssueDate: '2023-10-29',
    DueDate: '2023-11-29',
    ClosedDate: '2023-12-29',
    Cancelled: false,
    CurrencyCode: 'USD',
};

// Mock the useWindowSize hook
jest.mock('@invoice-manager/core', () => ({
    useWindowSize: jest.fn(() => [1200]), // Mock the width as 1200 by default
    WidthToggler: ({ isExpanded, toggleExpand }) => <></>
}));

jest.mock('@invoice-manager/data-grid', () => ({
    MaterialDataGrid: ({ columns,
        rows,
        rowIdField,
        getRowStyle,
        columnVisibility,
        gridId
    }) => <></>
}));


jest.mock('@invoice-manager/models', () => ({
}));

describe('ReceivablesGrid', () => {
    it('renders without errors', () => {
        const receivables = [mockReceivableDTO];

        const { container } = render(<ReceivablesGrid receivables={receivables} />);

        expect(container).toBeInTheDocument();
    });
});

test('Checked component matches snapshot', () => {
    const receivables = [mockReceivableDTO];

    const { asFragment } = render(<ReceivablesGrid receivables={receivables} />);
    expect(asFragment()).toMatchSnapshot();
  });
  