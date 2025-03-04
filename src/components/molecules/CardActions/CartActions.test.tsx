import { fireEvent, render, screen } from "@testing-library/react";
import { CartActions } from "./CartActions";
import { useWindowSize } from "@/hooks/useScreenSize";

jest.mock("@/hooks/useScreenSize");

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("CartActions", () => {
  it.only("renders ContinueShoppingButton when cart is empty", () => {
    (useWindowSize as jest.Mock).mockReturnValue({ width: 1024 });

    render(<CartActions cartLength={0} totalPrice={0} />);

    const continueShoppingButton = screen.getByText("CONTINUE SHOPPING");
    fireEvent.click(continueShoppingButton);

    expect(continueShoppingButton).toBeInTheDocument();
    expect(screen.queryByText("PAY")).not.toBeInTheDocument();
    expect(mockNavigate).toHaveBeenCalledWith("/phones");
  });

  it("renders PayButton and total price when cart has items", () => {
    (useWindowSize as jest.Mock).mockReturnValue({ width: 1024 });

    render(<CartActions cartLength={2} totalPrice={100} />);

    expect(screen.getByText("PAY")).toBeInTheDocument();
    expect(screen.getByText("100 EUR")).toBeInTheDocument();
  });

  it("applies sticky class when cart has 1 or fewer items", () => {
    (useWindowSize as jest.Mock).mockReturnValue({ width: 1024 });

    const { container } = render(
      <CartActions cartLength={1} totalPrice={50} />,
    );

    expect(container.firstChild).toHaveClass("sticky bottom-0");
  });

  it("does not apply sticky class when cart has more than 1 item", () => {
    (useWindowSize as jest.Mock).mockReturnValue({ width: 1024 });

    const { container } = render(
      <CartActions cartLength={2} totalPrice={100} />,
    );

    expect(container.firstChild).not.toHaveClass("sticky bottom-0");
  });
});
