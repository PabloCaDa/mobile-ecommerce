import { render, screen } from "@testing-library/react";
import { CartItemList } from "./CartItemList";
import { ICartItem } from "@/types";
import { cartFixture } from "@/test/__fixtures__/cart";

jest.mock("@/components/molecules", () => ({
  CartItem: ({ cartItem }: { cartItem: ICartItem }) => (
    <div data-testid={`cart-item-${cartItem.ref}`}>
      {cartItem.name} - {cartItem.price}
    </div>
  ),
}));

describe("CartItemList", () => {
  it("renders the correct number of CartItem components", () => {
    render(<CartItemList cart={cartFixture} />);
    const cartItems = screen.getAllByTestId(/^cart-item-/);
    expect(cartItems).toHaveLength(cartFixture.length);
  });

  it("passes the correct props to each CartItem", () => {
    render(<CartItemList cart={cartFixture} />);
    cartFixture.forEach((item) => {
      const cartItem = screen.getByTestId(`cart-item-${item.ref}`);
      expect(cartItem).toHaveTextContent(`${item.name} - ${item.price}`);
    });
  });

  it("renders nothing when cart is empty", () => {
    render(<CartItemList cart={[]} />);
    expect(screen.queryByTestId(/^cart-item-/)).not.toBeInTheDocument();
  });
});
