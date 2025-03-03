import { render, screen, waitFor } from "@testing-library/react";
import { PhoneDetails } from "./PhoneDetails";
import { usePhone } from "@/hooks/phones/usePhone";
import * as reactRouterDom from "react-router-dom";

jest.mock("@/hooks/phones/usePhone");

jest.mock("@/components/organisms/PhoneSelector/PhoneSelector", () => ({
  PhoneSelector: () => <div data-testid="phone-selector">Phone Selector</div>,
}));

jest.mock(
  "@/components/organisms/SpecificationsTable/SpecificationsTable",
  () => ({
    SpecificationsTable: () => (
      <div data-testid="specifications-table">Specifications Table</div>
    ),
  }),
);

jest.mock("@/components/organisms/SimilarProducts/SimilarProducts", () => ({
  SimilarProducts: () => (
    <div data-testid="similar-products">Similar Products</div>
  ),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

const renderComponent = (id = "123") => {
  (reactRouterDom.useParams as jest.Mock).mockReturnValue({ id });
  return render(<PhoneDetails />);
};

describe("PhoneDetails", () => {
  it("renders PhoneSelector, SpecificationsTable, and SimilarProducts when phone data is loaded successfully", async () => {
    (usePhone as jest.Mock).mockReturnValue({
      phone: {
        id: "123",
        name: "Test Phone",
        specs: {},
        brand: "Test Brand",
        description: "Test Description",
        similarProducts: [],
      },
      error: null,
    });

    renderComponent();

    await waitFor(() => {
      expect(screen.getByTestId("phone-selector")).toBeInTheDocument();
      expect(screen.getByTestId("specifications-table")).toBeInTheDocument();
      expect(screen.getByTestId("similar-products")).toBeInTheDocument();
    });
  });

  it("renders error message when there is an error fetching phone data", async () => {
    (usePhone as jest.Mock).mockReturnValue({
      phone: null,
      error: new Error("Failed to fetch"),
    });

    renderComponent();

    await waitFor(() => {
      expect(screen.getByText("Something went wrong")).toBeInTheDocument();
    });
  });
});
