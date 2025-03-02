import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Navbar } from "./Navbar";

describe("Navbar", () => {
  it("renders logo and shopping cart link", () => {
    const { getByAltText, getByRole } = render(
      <MemoryRouter initialEntries={["/phones"]}>
        <Navbar />
      </MemoryRouter>,
    );

    expect(getByAltText("Brand logo")).toBeInTheDocument();
    expect(getByRole("link", { name: /Shopping cart/i })).toBeInTheDocument();
  });

  it("renders PhoneSearch component on /phones route", () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter initialEntries={["/phones"]}>
        <Navbar />
      </MemoryRouter>,
    );

    expect(getByPlaceholderText("Search phones...")).toBeInTheDocument();
  });

  it("renders BackButton component on non-/phones route", () => {
    const { getByRole } = render(
      <MemoryRouter initialEntries={["/other"]}>
        <Navbar />
      </MemoryRouter>,
    );

    expect(getByRole("button", { name: /back/i })).toBeInTheDocument();
  });
});
