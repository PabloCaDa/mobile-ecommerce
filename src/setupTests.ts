import "@testing-library/jest-dom";

jest.mock("lucide-react", () => ({
  ShoppingCart: jest.fn(() => "Shopping Cart logo"),
  ChevronLeft: () => "ChevronLeft logo",
}));
