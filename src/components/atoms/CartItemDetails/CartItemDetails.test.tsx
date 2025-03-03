import { render, screen, fireEvent } from "@testing-library/react";
import { CartItemDetails } from "./CartItemDetails";
import { cartFixture } from "@/test/__fixtures__/cart";

const mockHandleOnClick = jest.fn();

const renderComponent = () =>
  render(
    <CartItemDetails
      cartItem={cartFixture[0]}
      handleOnClick={mockHandleOnClick}
    />,
  );

describe("CartItemDetails", () => {
  it("renders correctly with initial state", () => {
    renderComponent();

    expect(
      screen.getByText(cartFixture[0].name.toUpperCase()),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        `${cartFixture[0].storage} | ${cartFixture[0].color.toUpperCase()}`,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(`QUANTITY: ${cartFixture[0].quantity}`),
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${cartFixture[0].price * cartFixture[0].quantity} EUR`),
    ).toBeInTheDocument();
  });

  it("calls handleOnClick when remove button is clicked", () => {
    renderComponent();
    const removeButton = screen.getByLabelText("Remove item from cart");

    fireEvent.click(removeButton);
    expect(mockHandleOnClick).toHaveBeenCalledWith(cartFixture[0].ref);
  });
});
