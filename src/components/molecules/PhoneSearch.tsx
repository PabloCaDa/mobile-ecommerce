import { Input } from "@/components/atoms/Input";
import { ResultsAmount } from "@/components/atoms/ResultsAmount";
import { TEXTS } from "@/constants";

export const PhoneSearch = () => {
  const handleInputChange = (inputValue: string) => {
    console.log(inputValue);
  };

  const handleClearSearch = () => {
    console.log("");
  };

  const resultsAmount = 10;

  return (
    <div className="w-full flex flex-col items-start sticky pt-1 z-10 bg-white">
      <Input
        onChange={handleInputChange}
        onClear={handleClearSearch}
        placeholder={TEXTS.search.searchPhonePlaceholder}
        name="search"
        ariaLabel="Search phones"
        type={""}
      />

      {!!resultsAmount && <ResultsAmount resultsAmount={resultsAmount} />}
    </div>
  );
};
