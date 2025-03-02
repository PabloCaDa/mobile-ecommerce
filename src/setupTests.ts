import "@testing-library/jest-dom";

jest.mock("lucide-react", () => ({
  ShoppingCart: jest.fn(() => "Shopping Cart logo"),
  ChevronLeft: () => "ChevronLeft logo",
}));

jest.mock("@/config", () => {
  return jest.fn((key: "VITE_API_BASE_URL" | "VITE_API_KEY") => {
    const env = {
      VITE_API_BASE_URL: "https://api.example.com",
      VITE_API_KEY: "test-api-key",
    };
    return env[key];
  });
});

jest.mock("@/assets/logo.svg", () => "mock-logo");
