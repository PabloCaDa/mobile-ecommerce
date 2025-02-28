import { DebouncedState } from "use-debounce";

export interface SearchContextProps {
  searchValue: string;
  debouncedSearch: DebouncedState<(value: string) => void>;
  resultsAmount: number;
  setResultsAmount: React.Dispatch<React.SetStateAction<number>>;
}
