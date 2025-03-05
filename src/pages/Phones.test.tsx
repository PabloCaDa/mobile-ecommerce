import { render, screen, act } from "@testing-library/react";
import { Phones } from "@/pages/Phones";
import { SearchContext } from "@/contexts/SearchContext";
import { usePhones } from "@/hooks/phones/usePhones";
import { mockPhonesFixture } from "@/test/__fixtures__/phones";

jest.mock("@/hooks/phones/usePhones");

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

const mockDebouncedSearch = Object.assign(jest.fn(), {
  cancel: jest.fn(),
  flush: jest.fn(),
  isPending: jest.fn(),
});

const mockSetResultsAmount = jest.fn();

const renderPhonesComponent = async ({
  phones,
  isLoading,
  error,
}: {
  phones: typeof mockPhonesFixture;
  isLoading: boolean;
  error: Error | null;
}) => {
  (usePhones as jest.Mock).mockReturnValue({
    phones,
    error,
    isLoading,
    fetchNextPage: jest.fn(),
    hasNextPage: false,
  });

  await act(async () => {
    render(
      <SearchContext.Provider
        value={{
          searchValue: "",
          setResultsAmount: mockSetResultsAmount,
          debouncedSearch: mockDebouncedSearch,
          resultsAmount: 0,
        }}
      >
        <Phones />
      </SearchContext.Provider>,
    );
  });
};

describe("Phones page", () => {
  it("calls setResultsAmount when phones change", async () => {
    await renderPhonesComponent({
      phones: mockPhonesFixture,
      isLoading: false,
      error: null,
    });

    expect(mockSetResultsAmount).toHaveBeenCalledWith(mockPhonesFixture.length);
  });

  it("displays error message when there's an error", async () => {
    await renderPhonesComponent({
      phones: [],
      isLoading: false,
      error: new Error("Test error"),
    });

    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
  });
});
