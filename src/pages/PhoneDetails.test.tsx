import { render, screen, waitFor } from "@testing-library/react";
import { PhoneDetails } from "./PhoneDetails";
import { usePhone } from "@/hooks/phones/usePhone";
import * as reactRouterDom from "react-router-dom";

jest.mock("@/hooks/phones/usePhone");

jest.mock("@/components/organisms/PhoneSelector/PhoneSelector", () => ({
  PhoneSelector: () => <div data-testid="phone-selector">Phone Selector</div>,
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

//TODO: Update test to loading state

const renderComponent = (id = "123") => {
  (reactRouterDom.useParams as jest.Mock).mockReturnValue({ id });
  return render(<PhoneDetails />);
};

describe("PhoneDetails", () => {
  it("renders PhoneSelector when phone data is loaded successfully", async () => {
    (usePhone as jest.Mock).mockReturnValue({
      phone: { id: "123", name: "Test Phone" },
      error: null,
    });

    renderComponent();

    await waitFor(() => {
      expect(screen.getByTestId("phone-selector")).toBeInTheDocument();
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
