import { render, screen } from "@testing-library/react";
import { ResultsAmount } from "./ResultsAmount";
import { TEXTS } from "@/constants";

describe("ResultsAmount", () => {
  it("renders correctly with the given results amount", () => {
    const resultsAmount = 5;
    render(<ResultsAmount resultsAmount={resultsAmount} />);

    expect(
      screen.getByText(
        `${resultsAmount} ${TEXTS.search.results.toUpperCase()}`,
      ),
    ).toBeInTheDocument();
  });
});
