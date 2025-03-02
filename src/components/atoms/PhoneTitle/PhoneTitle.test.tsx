import { render, screen } from "@testing-library/react";
import { PhoneTitle } from "./PhoneTitle";

describe("PhoneTitle", () => {
  it("renders title in uppercase", () => {
    render(<PhoneTitle title="iPhone" price={999} isBasePrice={false} />);

    const heading = screen.getByRole("heading");
    const price = screen.getByLabelText("Phone price");

    expect(heading).toHaveTextContent("IPHONE");
    expect(price).toHaveTextContent("999 EUR");
  });

  it("renders price correctly when isBasePrice is true", () => {
    render(<PhoneTitle title="iPhone" price={999} isBasePrice={true} />);

    const price = screen.getByLabelText("Phone price");

    expect(price).toHaveTextContent("From 999 EUR");
  });
});
