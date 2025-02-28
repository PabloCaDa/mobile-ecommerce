import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { NavBar } from "./Navbar";

jest.mock("lucide-react", () => ({
  ShoppingCart: jest.fn(() => "shopping-cart"),
  ChevronLeft: jest.fn(() => "back"),
}));

jest.mock("@/assets/logo.svg", () => "mock-logo");

describe("NavBar", () => {
  it("renders logo and shopping cart link", () => {
    const { getByAltText, getByRole } = render(
      <MemoryRouter initialEntries={["/phones"]}>
        <NavBar />
      </MemoryRouter>,
    );

    expect(getByAltText("Brand logo")).toBeInTheDocument();
    expect(getByRole("link", { name: /Shopping cart/i })).toBeInTheDocument();
  });

  it("renders PhoneSearch component on /phones route", () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter initialEntries={["/phones"]}>
        <NavBar />
      </MemoryRouter>,
    );

    expect(getByPlaceholderText("Search phones...")).toBeInTheDocument();
  });

  it("renders BackButton component on non-/phones route", () => {
    const { getByRole } = render(
      <MemoryRouter initialEntries={["/other"]}>
        <NavBar />
      </MemoryRouter>,
    );

    expect(getByRole("button", { name: /back/i })).toBeInTheDocument();
  });
});
