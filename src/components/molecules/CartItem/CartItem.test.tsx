import { render, screen, fireEvent } from "@testing-library/react";
import { CartItem } from "./CartItem";
import { CartContext } from "@/contexts/CartContext";
import { TEXTS } from "@/constants";
import startcase from "lodash.startcase";
import { cartFixture } from "@/test/__fixtures__/cart";

const mockRemoveFromCart = jest.fn();

const renderComponent = () =>
  render(
    <CartContext.Provider
      value={{
        removeFromCart: mockRemoveFromCart,
        cart: [],
        addToCart: jest.fn(),
      }}
    >
      <CartItem cartItem={cartFixture[0]} />
    </CartContext.Provider>,
  );

describe("CartItem", () => {
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
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      cartFixture[0].imageUrl,
    );
  });

  it("calls removeFromCart when remove button is clicked", () => {
    renderComponent();
    const removeButton = screen.getByRole("button", {
      name: startcase(TEXTS.cartItem.removeButton).toUpperCase(),
    });

    fireEvent.click(removeButton);
    expect(mockRemoveFromCart).toHaveBeenCalledWith(cartFixture[0].ref);
  });
});
