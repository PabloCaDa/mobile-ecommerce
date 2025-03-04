import { render, screen } from "@testing-library/react";
import { CartHeader } from "./CartHeader";
import { TEXTS } from "@/constants";

describe("CartHeader", () => {
  it("renders the cart title with the correct amount of items", () => {
    const ammountOfItems = 5;
    render(<CartHeader ammountOfItems={ammountOfItems} />);

    const titleElement = screen.getByLabelText("Cart title");
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent(
      `${TEXTS.cart.title.toUpperCase()}(${ammountOfItems})`,
    );
  });
});
