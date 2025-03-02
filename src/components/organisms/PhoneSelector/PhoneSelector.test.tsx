import { render, screen, fireEvent } from "@testing-library/react";
import { PhoneSelector } from "./PhoneSelector";
import { mockPhoneFixture } from "@/test/__fixtures__/phones";

describe("PhoneSelector", () => {
  beforeEach(() => {
    render(<PhoneSelector phone={mockPhoneFixture} />);
  });

  it("renders phone image and title", () => {
    expect(screen.getByAltText("Phone name picture")).toBeInTheDocument();
    expect(screen.getByText("Phone name".toUpperCase())).toBeInTheDocument();
  });

  it("renders storage options", () => {
    expect(screen.getByText("Phone storage")).toBeInTheDocument();
    expect(screen.getByText("Phone storage 2")).toBeInTheDocument();
  });

  it("renders color options", () => {
    expect(
      screen.getByLabelText("Select color Phone color"),
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("Select color Phone color 2"),
    ).toBeInTheDocument();
  });

  it("enables add phone button when storage and color are selected", () => {
    fireEvent.click(screen.getByText("Phone storage"));
    fireEvent.click(screen.getByLabelText("Select color Phone color"));
    expect(screen.getByRole("button", { name: /ADD/i })).toBeEnabled();
  });
});
