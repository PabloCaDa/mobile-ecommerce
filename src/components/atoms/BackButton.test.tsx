import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { BackButton } from "./BackButton";
import { TEXTS } from "@/constants";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

jest.mock("lucide-react", () => ({
  ChevronLeft: jest.fn(() => "logo"),
}));

const backButtonText = TEXTS.navbar.back.toUpperCase();

describe("BackButton", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <BackButton />
      </BrowserRouter>,
    );
  });

  it("renders correctly", () => {
    expect(screen.getByText(backButtonText)).toBeInTheDocument();
    expect(screen.getByText("logo")).toBeInTheDocument();
  });

  it("navigates back when clicked", () => {
    fireEvent.click(screen.getByText(backButtonText));
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });
});
