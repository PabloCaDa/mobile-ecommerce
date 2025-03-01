import { render, screen, fireEvent } from "@testing-library/react";
import { PhoneSearch } from "@/components/molecules";
import { SearchContext } from "@/contexts";
import { TEXTS } from "@/constants";

describe("PhoneSearch", () => {
  const mockDebouncedSearch = Object.assign(jest.fn(), {
    cancel: jest.fn(),
    flush: jest.fn(),
    isPending: jest.fn(),
  });

  const defaultValues = {
    debouncedSearch: mockDebouncedSearch,
    resultsAmount: 0,
    searchValue: "",
    setResultsAmount: jest.fn(),
  };

  const renderComponent = (contextValues = {}) => {
    return render(
      <SearchContext.Provider value={{ ...defaultValues, ...contextValues }}>
        <PhoneSearch />
      </SearchContext.Provider>,
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly with initial values", () => {
    renderComponent();

    const input = screen.getByPlaceholderText(
      TEXTS.search.searchPhonePlaceholder,
    );
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("");
  });

  it("calls debouncedSearch when typing", () => {
    renderComponent();

    const input = screen.getByPlaceholderText(
      TEXTS.search.searchPhonePlaceholder,
    );
    fireEvent.change(input, { target: { value: "iPhone" } });

    expect(mockDebouncedSearch).toHaveBeenCalledWith("iPhone");
  });

  it("calls debouncedSearch with an empty string when clearing input", () => {
    renderComponent({ searchValue: "Samsung" });

    const clearButton = screen.getByRole("button", { name: /clear/i });
    fireEvent.click(clearButton);

    expect(mockDebouncedSearch).toHaveBeenCalledWith("");
  });

  it("renders ResultsAmount when there are results", () => {
    renderComponent({ resultsAmount: 5 });

    expect(screen.getByText("5 RESULTS")).toBeInTheDocument();
  });

  it("does not render ResultsAmount when there are no results", () => {
    renderComponent({ resultsAmount: 0 });

    expect(screen.queryByText(/\d+/)).not.toBeInTheDocument();
  });
});
