import { render, screen } from "@testing-library/react";
import { FormattedCurrency } from "./FormattedCurrency";

describe("FormattedCurrency", () => {
  
  test('FormattedCurrency component matches snapshot', () => {
    const { asFragment } = render(<FormattedCurrency currencyCode="USD" value={20} />);
    expect(asFragment()).toMatchSnapshot();
  });


  it("Renders the FormattedNumber component with the correct props", () => {
    render(<FormattedCurrency currencyCode="USD" value={20} />);
    expect(
      screen.getByText(/US\$20.00/)
    ).toBeInTheDocument();
  });
});
