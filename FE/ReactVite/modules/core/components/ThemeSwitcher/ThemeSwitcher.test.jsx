import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { ThemeSwitcher } from './ThemeSwitcher';

describe('ThemeSwitcher Component', () => {

    test('ThemeSwitcher component matches snapshot for light theme', () => {
        const { asFragment } = render(<ThemeSwitcher theme="light" setTheme={jest.fn()} />);
        expect(asFragment()).toMatchSnapshot();
    });

    test('ThemeSwitcher component matches snapshot for dark theme', () => {
        const { asFragment } = render(<ThemeSwitcher theme="light" setTheme={jest.fn()} />);
        expect(asFragment()).toMatchSnapshot();
    });


    it('should render the component with the "light" theme', () => {
        const { getByTestId } = render(
            <ThemeSwitcher theme="light" setTheme={jest.fn()} />
        );

        const themeSwitcher = getByTestId('ThemeSwitcher');
        const moonButton = getByTestId('MoonIcon');

        expect(themeSwitcher).toBeInTheDocument();
        expect(moonButton).toBeInTheDocument();
    });

    it('should render the component with the "dark" theme', () => {
        const { getByTestId } = render(
            <ThemeSwitcher theme="dark" setTheme={jest.fn()} />
        );

        const themeSwitcher = getByTestId('ThemeSwitcher');
        const sunRiseButton = getByTestId('SunRiseIcon');

        expect(themeSwitcher).toBeInTheDocument();
        expect(sunRiseButton).toBeInTheDocument();
    });

    it('should call the setTheme function when a button is clicked', () => {
        const setThemeMock = jest.fn();
        const { getByTestId, container } = render(
            <ThemeSwitcher theme="light" setTheme={setThemeMock} />
        );

        const moonButton = getByTestId('MoonIcon');
        fireEvent.click(moonButton);

        expect(setThemeMock).toHaveBeenCalledWith('dark');
    });
});
