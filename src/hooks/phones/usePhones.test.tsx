import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { usePhones } from "./usePhones";
import { getPhones } from "@/lib/api/services/phoneService";
import { mockPhonesFixture } from "@/test/__fixtures__/phones";

jest.mock("@/lib/api/services/phoneService", () => ({
  getPhones: jest.fn(),
}));

const queryClient = new QueryClient();

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("usePhones", () => {
  beforeEach(() => jest.clearAllMocks());

  it("fetches and returns phones data", async () => {
    (getPhones as jest.Mock).mockResolvedValue(mockPhonesFixture);

    const { result } = renderHook(() => usePhones("", 2), { wrapper });

    await waitFor(() => {
      expect(result.current.phones).toEqual(mockPhonesFixture);
      expect(result.current.error).toBeNull();
      expect(result.current.isLoading).toEqual(false);
    });
  });
});
