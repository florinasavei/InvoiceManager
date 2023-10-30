import { render, screen } from '@testing-library/react';
import { BooleanIndicator } from './BooleanIndicator'; // Adjust the import path as needed


describe('BooleanIndicator', () => {

    test('BooleanIndicator true component matches snapshot', () => {
        const { asFragment } = render(<BooleanIndicator value={true} />);
        expect(asFragment()).toMatchSnapshot();
    });

    test('BooleanIndicator false component matches snapshot', () => {
        const { asFragment } = render(<BooleanIndicator value={true} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should render a checked icon when value is true', () => {
        render(<BooleanIndicator value={true} />);
        const checkedIcon = screen.getByTitle('true');
        expect(checkedIcon).toBeInTheDocument();
    });

    it('should render a cross icon when value is false', () => {
        render(<BooleanIndicator value={false} />);
        const crossIcon = screen.getByTitle('false');
        expect(crossIcon).toBeInTheDocument();
    });
});
