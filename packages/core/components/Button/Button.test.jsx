import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';

const testCases = [
    { type: 'primary', text: 'Click Me' },
    { type: 'secondary', text: 'Submit' },
    { type: 'ghost', text: 'Cancel' },
];


describe('Button', () => {

    testCases.forEach((testCase) => {

        test('Button component matches snapshot', () => {
            const { asFragment } = render(<Button type={testCase.type}>{testCase.text}</Button>);
            expect(asFragment()).toMatchSnapshot();
        });
    
        it('should render a button with the correct type and text', () => {
            const { getByText, container } = render(
                <Button type={testCase.type}>{testCase.text}</Button>
            );

            const buttonElement = getByText(testCase.text);
            expect(buttonElement).toBeInTheDocument();
            expect(buttonElement.tagName).toBe('BUTTON');

            expect(container.querySelector('.Button')).toBeInTheDocument();
            expect(container.querySelector(`.Button--${testCase.type}`)).toBeInTheDocument();
        });
    })


    it('should call the onClick function when the button is clicked', () => {
        const onClickMock = jest.fn();
        const { getByText } = render(
            <Button type="secondary" onClick={onClickMock}>
                Click Me
            </Button>
        );

        const buttonElement = getByText('Click Me');
        expect(buttonElement).toBeInTheDocument();

        fireEvent.click(buttonElement);
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    it('should have a title attribute if a title is provided', () => {
        const { getByText } = render(
            <Button type="ghost" title="Ghost Button" onClick={() => { }}>
                Click Me
            </Button>
        );

        const buttonElement = getByText('Click Me');
        expect(buttonElement).toHaveAttribute('title', 'Ghost Button');
    });
});
