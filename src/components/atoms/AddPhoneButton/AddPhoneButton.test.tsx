import { render, screen, fireEvent } from "@testing-library/react";
import { AddPhoneButton } from "./AddPhoneButton";
import { TEXTS } from "@/constants";

const mockHandleOnClick = jest.fn();

describe("AddPhoneButton", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders button with correct text", () => {
    render(
      <AddPhoneButton handleOnClick={mockHandleOnClick} disabled={false} />,
    );

    expect(
      screen.getByText(
        TEXTS.addPhoneButton.addPhoneButtonMessage.toUpperCase(),
      ),
    ).toBeInTheDocument();
  });

  it("calls handleOnClick when button is clicked", () => {
    render(
      <AddPhoneButton handleOnClick={mockHandleOnClick} disabled={false} />,
    );

    const button = screen.getByRole("button", { name: /add phone to cart/i });
    fireEvent.click(button);

    expect(mockHandleOnClick).toHaveBeenCalled();
  });

  it("does not call handleOnClick when button is disabled", () => {
    render(
      <AddPhoneButton handleOnClick={mockHandleOnClick} disabled={true} />,
    );

    const button = screen.getByRole("button", { name: /add phone to cart/i });

    fireEvent.click(button);
    fireEvent.mouseDown(button);
    fireEvent.keyPress(button, { key: "Enter", code: "Enter", charCode: 13 });

    expect(mockHandleOnClick).not.toHaveBeenCalled();
  });
});
