import { render, screen } from "@testing-library/react";
import { CardPhoneDetails } from "./CardPhoneDetails";

describe("CardPhoneDetails component", () => {
  beforeEach(() => {
    render(<CardPhoneDetails brand="Apple" name="iPhone 13" basePrice={999} />);
  });

  it("renders brand, name, and basePrice correctly", () => {
    expect(screen.getByText("APPLE")).toBeInTheDocument();
    expect(screen.getByText("IPHONE 13")).toBeInTheDocument();
    expect(screen.getByText("999 EUR")).toBeInTheDocument();
  });

  it("applies correct classes for styling", () => {
    const brandElement = screen.getByText("APPLE");
    expect(brandElement).toHaveClass(
      "text-[10px] text-grey-400 ease-in-out group-hover:text-white transition-all duration-300",
    );
  });
});
