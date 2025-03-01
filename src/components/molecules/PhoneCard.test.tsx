import { render, fireEvent, waitFor } from "@testing-library/react";
import { PhoneCard } from "./PhoneCard";
import { mockPhonesFixture } from "@/test/__fixtures__/phones";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

jest.mock("lucide-react", () => ({
  ChevronLeft: () => <svg />,
}));

describe("PhoneCard", () => {
  let card: HTMLElement;
  let image: HTMLElement;

  beforeEach(async () => {
    const { getByAltText, getByLabelText } = render(
      <PhoneCard phone={mockPhonesFixture[0]} />,
    );
    card = await waitFor(() =>
      getByLabelText("Phone Brand Phone name item card"),
    );
    image = await waitFor(() => getByAltText("Phone name picture"));
  });

  it("renders correctly with given props", async () => {
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "Phone Image URL");
    expect(card).toBeInTheDocument();
  });

  it("navigates to phone details on click", () => {
    fireEvent.click(card);

    expect(mockNavigate).toHaveBeenCalledWith("/phones/1");
  });

  it("navigates to phone details on Enter key press", () => {
    fireEvent.keyDown(card, { key: "Enter", code: "Enter" });

    expect(mockNavigate).toHaveBeenCalledWith("/phones/1");
  });
});
