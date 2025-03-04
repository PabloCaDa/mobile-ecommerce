import { render, screen } from "@testing-library/react";
import { Cart } from "@/pages/Cart";
import { CartContext } from "@/contexts";
import { TEXTS } from "@/constants";
import { cartFixture } from "@/test/__fixtures__/cart";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

jest.mock("@/components/organisms/CartItemList/CartItemList", () => ({
  CartItemList: () => <div data-testid="cart-item-list">Cart Item List</div>,
}));

jest.mock("@/components/molecules/CartActions/CartActions", () => ({
  CartActions: () => <div data-testid="cart-actions">Cart Actions</div>,
}));

const renderComponent = (cartItems = cartFixture) => {
  return render(
    <CartContext.Provider
      value={{
        cart: cartItems,
        removeFromCart: jest.fn(),
        addToCart: jest.fn(),
      }}
    >
      <Cart />
    </CartContext.Provider>,
  );
};

describe("Cart Component", () => {
  it("renders the cart title with item count", () => {
    renderComponent();

    const title = screen.getByLabelText("Cart title");

    expect(title).toBeInTheDocument();
  });

  it("render the CartActions and CartItemList components", () => {
    renderComponent();

    expect(screen.getByTestId("cart-item-list")).toBeInTheDocument();
    expect(screen.getByTestId("cart-actions")).toBeInTheDocument();
  });

  it("renders correctly when the cart is empty", () => {
    renderComponent([]);

    const title = screen.getByText(`${TEXTS.cart.title.toUpperCase()}(0)`);
    expect(title).toBeInTheDocument();

    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });
});
