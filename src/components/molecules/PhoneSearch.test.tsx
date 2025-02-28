import { render, screen, fireEvent } from "@testing-library/react";
import { PhoneSearch } from "@/components/molecules/PhoneSearch";

jest.mock("@/components/atoms/ResultsAmount", () => ({
  ResultsAmount: jest.fn(() => <div>Mocked ResultsAmount</div>),
}));

describe("PhoneSearch", () => {
  beforeEach(() => {
    render(<PhoneSearch />);
  });

  it("renders correctly", () => {
    expect(screen.getByPlaceholderText("Search phones...")).toBeInTheDocument();
    expect(screen.getByText("Mocked ResultsAmount")).toBeInTheDocument();
  });

  it("handles input change", () => {
    const input = screen.getByPlaceholderText("Search phones...");

    fireEvent.change(input, { target: { value: "test" } });
    expect(input).toHaveValue("test");
  });

  it("handles clear search", () => {
    const input = screen.getByPlaceholderText("Search phones...");

    fireEvent.change(input, { target: { value: "test" } });
    fireEvent.change(input, { target: { value: "" } });
    expect(input).toHaveValue("");
  });
});
