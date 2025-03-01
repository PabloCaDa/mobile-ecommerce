import React from "react";
import { render, act } from "@testing-library/react";
import { SearchProvider, SearchContext } from "./SearchContext";
import { SearchContextProps } from "@/types";

jest.mock("use-debounce", () => ({
  useDebouncedCallback: (callback: (...args: unknown[]) => unknown) =>
    jest.fn(callback),
}));

describe("SearchProvider", () => {
  const TestConsumer: React.FC<{
    onContext: (context: SearchContextProps) => void;
  }> = ({ onContext }) => (
    <SearchContext.Consumer>
      {(context) => {
        onContext(context);
        return null;
      }}
    </SearchContext.Consumer>
  );

  it("renders children correctly", () => {
    const { getByText } = render(
      <SearchProvider>
        <div>Test Child</div>
      </SearchProvider>,
    );

    expect(getByText("Test Child")).toBeInTheDocument();
  });

  it("provides the correct initial context values", () => {
    let contextValues: SearchContextProps | undefined;

    render(
      <SearchProvider>
        <TestConsumer
          onContext={(context) => {
            contextValues = context;
          }}
        />
      </SearchProvider>,
    );

    expect(contextValues).toEqual({
      searchValue: "",
      debouncedSearch: expect.any(Function),
      resultsAmount: 0,
      setResultsAmount: expect.any(Function),
    });
  });

  it("updates searchValue when debouncedSearch is called", () => {
    let contextValues: SearchContextProps | undefined;

    render(
      <SearchProvider>
        <TestConsumer
          onContext={(context) => {
            contextValues = context;
          }}
        />
      </SearchProvider>,
    );

    act(() => {
      contextValues!.debouncedSearch("test search");
    });

    expect(contextValues!.searchValue).toBe("test search");
  });

  it("updates resultsAmount when setResultsAmount is called", () => {
    let contextValues: SearchContextProps | undefined;

    render(
      <SearchProvider>
        <TestConsumer
          onContext={(context) => {
            contextValues = context;
          }}
        />
      </SearchProvider>,
    );

    act(() => {
      contextValues!.setResultsAmount(10);
    });

    expect(contextValues!.resultsAmount).toBe(10);
  });
});
