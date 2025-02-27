import { render, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

describe("Button component", () => {
  it("renders correctly with default props", () => {
    const { getByText } = render(
      <Button variant="default" size="content">
        Default
      </Button>
    );
    const button = getByText("Default");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      "w-full border bg-gray-100 text-gray-700 hover:bg-gray-200 text-xs"
    );
  });

  it("renders correctly with primary variant", () => {
    const { getByText } = render(
      <Button variant="primary" size="small">
        Primary
      </Button>
    );
    const button = getByText("Primary");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      "w-full border py-[5px] px-[7px] border-black-100 bg-black-100 text-white h-[48px] text-xs"
    );
  });

  it("renders correctly with inverse variant", () => {
    const { getByText } = render(
      <Button variant="inverse" size="large">
        Inverse
      </Button>
    );
    const button = getByText("Inverse");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      "w-full border py-[5px] px-[7px] bg-white text-black-100 border-black-300 h-[56px]"
    );
  });

  it("renders correctly with danger variant", () => {
    const { getByText } = render(
      <Button variant="danger" size="content">
        Danger
      </Button>
    );
    const button = getByText("Danger");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      "w-full border border-0 py-[0px] px-[0px] text-red-500 text-start text-xs"
    );
  });

  it("handles click events", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button variant="default" size="content" onClick={handleClick}>
        Click me
      </Button>
    );
    const button = getByText("Click me");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies disabled styles and does not handle click events when disabled", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button variant="primary" size="small" onClick={handleClick} disabled>
        Disabled
      </Button>
    );
    const button = getByText("Disabled");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      "w-full border py-[5px] px-[7px] border-black-100 bg-grey-200 border-grey-200 text-grey-300 h-[48px] text-xs"
    );
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
