import { TEXTS } from "@/constants";

export const ResultsAmount = ({ resultsAmount }: { resultsAmount: number }) => (
  <span className="text-sm text-gray-500 mt-1">
    {resultsAmount.toString()} {TEXTS.search.results.toUpperCase()}
  </span>
);
