import { render, screen, waitFor } from "@testing-library/react";
import { PhonesGrid } from "./PhoneGrid";
import { mockPhonesFixture } from "@/test/__fixtures__/phones";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("PhonesGrid", () => {
  it("renders correctly with vertical display", async () => {
    render(<PhonesGrid phones={mockPhonesFixture} />);

    const phoneItems = await waitFor(() => screen.getAllByRole("article"));
    expect(phoneItems).toHaveLength(mockPhonesFixture.length);
  });

  it("renders correctly with horizontal display", () => {
    render(<PhonesGrid phones={mockPhonesFixture} isHorizontalDisplay />);

    const phoneItems = screen.getAllByRole("article");
    expect(phoneItems).toHaveLength(mockPhonesFixture.length);
  });

  it("has correct aria attributes", () => {
    render(<PhonesGrid phones={mockPhonesFixture} />);

    const list = screen.getByRole("list");
    expect(list).toHaveAttribute("aria-label", "List of phones results");
    expect(list).toHaveAttribute("tabIndex", "0");
  });
});
