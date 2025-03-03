import { render, screen } from "@testing-library/react";
import { CartProvider, CartContext } from "./CartContext";
import { useContext } from "react";

const TestComponent = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <button
        onClick={() =>
          addToCart({
            id: "1",
            name: "Test Item",
            color: "Red",
            storage: "64GB",
            price: 100,
            imageUrl: "",
          })
        }
      >
        Add to Cart
      </button>
      <button onClick={() => removeFromCart("1Red64GB")}>
        Remove from Cart
      </button>
      <div data-testid="cart-items">{JSON.stringify(cart)}</div>
    </div>
  );
};

describe("CartContext", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should add an item to the cart", () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>,
    );

    const addButton = screen.getByText("Add to Cart");
    addButton.click();

    const cartItems = screen.getByTestId("cart-items");
    expect(cartItems.textContent).toContain("Test Item");
  });

  it("should remove an item from the cart", () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>,
    );

    const addButton = screen.getByText("Add to Cart");
    addButton.click();

    const removeButton = screen.getByText("Remove from Cart");
    removeButton.click();

    const cartItems = screen.getByTestId("cart-items");
    expect(cartItems.textContent).not.toContain("Test Item");
  });
});
