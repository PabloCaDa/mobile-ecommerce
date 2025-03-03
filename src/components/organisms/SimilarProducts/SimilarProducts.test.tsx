import { render, screen } from "@testing-library/react";
import { SimilarProducts } from "./SimilarProducts";
import { TEXTS } from "@/constants";
import { mockPhoneFixture } from "@/test/__fixtures__/phones";

jest.mock("@/components/organisms", () => ({
  PhonesGrid: jest.fn(() => <div data-testid="phones-grid" />),
}));

describe("SimilarProducts Component", () => {
  it("renders the title correctly", () => {
    render(
      <SimilarProducts similarProducts={mockPhoneFixture.similarProducts} />,
    );

    expect(
      screen.getByText(TEXTS.similarProducts.title.toUpperCase()),
    ).toBeInTheDocument();
  });

  it("renders the PhonesGrid component with the correct props", () => {
    render(
      <SimilarProducts similarProducts={mockPhoneFixture.similarProducts} />,
    );

    const phonesGrid = screen.getByTestId("phones-grid");
    expect(phonesGrid).toBeInTheDocument();
  });
});
