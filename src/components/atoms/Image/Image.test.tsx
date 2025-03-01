import { render, screen, fireEvent } from "@testing-library/react";
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

  it("calls handleOnLoad when image loads", () => {
    const handleOnLoad = jest.fn();
    render(
      <Image imageUrl="test.jpg" name="Test" handleOnLoad={handleOnLoad} />,
    );

    const imgElement = screen.getByRole("img");
    fireEvent.load(imgElement);

    expect(handleOnLoad).toHaveBeenCalledTimes(1);
  });

  it("calls handleOnError when image fails to load", () => {
    const handleOnError = jest.fn();
    render(
      <Image imageUrl="test.jpg" name="Test" handleOnError={handleOnError} />,
    );

    const imgElement = screen.getByRole("img");
    fireEvent.error(imgElement);

    expect(handleOnError).toHaveBeenCalledTimes(1);
  });
});
