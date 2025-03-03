import { render, screen, fireEvent } from "@testing-library/react";
import { PhoneSelector } from "@/components/organisms";
import { CartContext } from "@/contexts";
import { MemoryRouter } from "react-router-dom";
import { mockPhoneFixture } from "@/test/__fixtures__/phones";

const mockAddToCart = jest.fn();
const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

const renderComponent = () =>
  render(
    <CartContext.Provider
      value={{ addToCart: mockAddToCart, cart: [], removeFromCart: jest.fn() }}
    >
      <MemoryRouter>
        <PhoneSelector phone={mockPhoneFixture} />
      </MemoryRouter>
    </CartContext.Provider>,
  );

describe("PhoneSelector", () => {
  it("renders correctly with initial state", () => {
    renderComponent();

    expect(
      screen.getByText(mockPhoneFixture.name.toUpperCase()),
    ).toBeInTheDocument();
    expect(
      screen.getByText(`From ${mockPhoneFixture.storageOptions[0].price} EUR`),
    ).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      mockPhoneFixture.colorOptions[0].imageUrl,
    );
  });

  it("updates price when selecting a different storage", () => {
    renderComponent();
    const storageOption = screen.getByText(
      mockPhoneFixture.storageOptions[1].capacity,
    );

    fireEvent.click(storageOption);
    expect(
      screen.getByText(`${mockPhoneFixture.storageOptions[1].price} EUR`),
    ).toBeInTheDocument();
  });

  it("updates image when selecting a different color", () => {
    renderComponent();
    const colorOption = screen.getByLabelText(
      `Select color ${mockPhoneFixture.colorOptions[1].name}`,
    );

    fireEvent.click(colorOption);
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      mockPhoneFixture.colorOptions[1].imageUrl,
    );
  });

  it("enables add to cart button when both storage and color are selected", () => {
    renderComponent();
    const storageOption = screen.getByText(
      mockPhoneFixture.storageOptions[1].capacity,
    );
    const colorOption = screen.getByLabelText(
      `Select color ${mockPhoneFixture.colorOptions[1].name}`,
    );

    fireEvent.click(storageOption);
    fireEvent.click(colorOption);

    expect(screen.getByRole("button", { name: /ADD/i })).toBeEnabled();
  });

  it("adds to cart and navigates on button click", () => {
    renderComponent();
    const storageOption = screen.getByText(
      mockPhoneFixture.storageOptions[1].capacity,
    );
    const colorOption = screen.getByLabelText(
      `Select color ${mockPhoneFixture.colorOptions[1].name}`,
    );
    const addToCartButton = screen.getByRole("button", {
      name: /ADD/i,
    });

    fireEvent.click(storageOption);
    fireEvent.click(colorOption);
    fireEvent.click(addToCartButton);

    expect(mockAddToCart).toHaveBeenCalledWith({
      id: "1",
      name: "Phone name",
      color: "Phone color 2",
      imageUrl: "Phone image 2",
      price: 200,
      storage: "Phone storage 2",
    });

    expect(mockNavigate).toHaveBeenCalledWith("/cart");
  });
});
