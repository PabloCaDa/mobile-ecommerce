import React from "react";
import { render, act } from "@testing-library/react";
import { CartProvider, CartContext } from "./CartContext";
import { ICartItem } from "@/types";
import { cartFixture } from "@/test/__fixtures__/cart";

const localStorageMock = (() => {
  let store: { [key: string]: string } = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });

afterEach(() => jest.clearAllMocks());

describe("CartProvider", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("provides initial empty cart", () => {
    const { getByText } = render(
      <CartProvider>
        <CartContext.Consumer>
          {({ cart }) => <div>Cart items: {cart.length}</div>}
        </CartContext.Consumer>
      </CartProvider>,
    );

    expect(getByText("Cart items: 0")).toBeInTheDocument();
  });

  it("adds item to cart", () => {
    const TestComponent = () => {
      const { cart, addToCart } = React.useContext(CartContext);
      return (
        <>
          <div>Cart items: {cart.length}</div>
          <button onClick={() => addToCart(cartFixture[0])}>Add to cart</button>
        </>
      );
    };

    const { getByText } = render(
      <CartProvider>
        <TestComponent />
      </CartProvider>,
    );

    expect(getByText("Cart items: 0")).toBeInTheDocument();
    act(() => {
      getByText("Add to cart").click();
    });
    expect(getByText("Cart items: 1")).toBeInTheDocument();
  });

  it("removes item from cart", () => {
    const initialCart: ICartItem[] = cartFixture;
    localStorage.setItem("cart", JSON.stringify(initialCart));

    const TestComponent = () => {
      const { cart, removeFromCart } = React.useContext(CartContext);
      return (
        <>
          <div>Cart items: {cart.length}</div>
          <button onClick={() => removeFromCart("1PhonecolorPhonestorage")}>
            Remove from cart
          </button>
        </>
      );
    };

    const { getByText } = render(
      <CartProvider>
        <TestComponent />
      </CartProvider>,
    );

    expect(getByText("Cart items: 2")).toBeInTheDocument();
    act(() => {
      getByText("Remove from cart").click();
    });
    expect(getByText("Cart items: 1")).toBeInTheDocument();
  });
});
