import { Input } from "@/components/atoms/Input";
import { ResultsAmount } from "@/components/atoms/ResultsAmount";
import { TEXTS } from "@/constants";
import { SearchContext } from "@/contexts";
import { use } from "react";

export const PhoneSearch = () => {
  const { debouncedSearch, resultsAmount, searchValue } = use(SearchContext);

  const handleInputChange = (inputValue: string) => {
    debouncedSearch(inputValue);
  };

  const handleClearSearch = () => {
    debouncedSearch("");
  };

  return (
    <div className="w-full flex flex-col items-start sticky pt-1 z-10 bg-white">
      <Input
        onChange={handleInputChange}
        onClear={handleClearSearch}
        placeholder={TEXTS.search.searchPhonePlaceholder}
        name="search"
        ariaLabel="Search phones"
        type={""}
        initialValue={searchValue}
      />

      {!!resultsAmount && <ResultsAmount resultsAmount={resultsAmount} />}
    </div>
  );
};
