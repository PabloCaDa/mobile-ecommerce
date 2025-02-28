import { SearchContextProps } from "@/types";
import { createContext, useState } from "react";
import { DebouncedState, useDebouncedCallback } from "use-debounce";

export const SearchContext = createContext<SearchContextProps>({
  searchValue: "",
  debouncedSearch: (() => {
    const callback = () => {};
    callback.cancel = () => {};
    callback.flush = () => {};
    callback.isPending = () => false;
    return callback;
  })() as DebouncedState<(value: string) => void>,
  resultsAmount: 0,
  setResultsAmount: () => {},
});

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchValue, setSearchValue] = useState("");
  const [resultsAmount, setResultsAmount] = useState(0);

  const debouncedSearch = useDebouncedCallback(
    (value: string) => {
      setSearchValue(value);
    },
    500,
    { leading: false, trailing: true },
  );

  return (
    <SearchContext.Provider
      value={{ searchValue, debouncedSearch, resultsAmount, setResultsAmount }}
    >
      {children}
    </SearchContext.Provider>
  );
};
