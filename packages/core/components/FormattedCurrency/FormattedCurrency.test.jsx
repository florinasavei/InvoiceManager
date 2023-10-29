import { render, screen } from "@testing-library/react";
import { FormattedCurrency } from "./FormattedCurrency";

describe("when rendering component", () => {
  it("should have the value", () => {
    render(<FormattedCurrency currencyCode="USD" value={20} />); 
    expect(
      screen.getByText(/20.00/)
    ).toBeInTheDocument();
  });
});
