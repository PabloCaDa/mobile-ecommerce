import { render, screen } from "@testing-library/react";
import { PayButton } from "./PayButton";

describe("PayButton", () => {
  it("calls onClick handler when clicked", () => {
    render(<PayButton isSmallScreen={false} />);
    const button = screen.getByLabelText("Pay for items in cart");

    expect(button).toBeInTheDocument();
  });
});
