import { render, screen, fireEvent } from "@testing-library/react";
import { ContinueShoppingButton } from "./ContinueShoppingButton";
import { MemoryRouter } from "react-router-dom";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

const renderComponent = (isSmallScreen: boolean) =>
  render(
    <MemoryRouter>
      <ContinueShoppingButton isSmallScreen={isSmallScreen} />
    </MemoryRouter>,
  );

describe("ContinueShoppingButton", () => {
  it("navigates to /phones on click", () => {
    renderComponent(false);
    const button = screen.getByLabelText("Continue shopping");

    fireEvent.click(button);
    expect(mockNavigate).toHaveBeenCalledWith("/phones");
  });
});
