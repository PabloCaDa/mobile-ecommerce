import { render, screen } from "@testing-library/react";
import Image from "./Image";

describe("Image component", () => {
  it("renders with correct src and alt attributes", () => {
    render(<Image imageUrl="test.jpg" name="Test" />);

    const imgElement = screen.getByRole("img");

    expect(imgElement).toHaveAttribute("src", "test.jpg");
    expect(imgElement).toHaveAttribute("alt", "Test picture");
  });

  it("applies the provided className", () => {
    render(<Image imageUrl="test.jpg" name="Test" className="test-class" />);

    const imgElement = screen.getByRole("img");
    expect(imgElement).toHaveClass("test-class");
  });
});
