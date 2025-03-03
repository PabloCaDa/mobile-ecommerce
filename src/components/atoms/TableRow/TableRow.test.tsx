import { render } from "@testing-library/react";
import { TableRow } from "./TableRow";

describe("TableRow", () => {
  it("renders the label and value correctly", () => {
    const { getByText } = render(
      <TableRow label="testLabel" value="testValue" />,
    );

    expect(getByText("TEST LABEL")).toBeInTheDocument();
    expect(getByText("testValue")).toBeInTheDocument();
  });

  it("applies the correct classes", () => {
    const { container } = render(
      <TableRow label="testLabel" value="testValue" />,
    );

    expect(container.firstChild).toHaveClass(
      "flex justify-between border-b border-gray-300 text-xs py-1",
    );
    expect(container.querySelector("span:first-child")).toHaveClass(
      "text-gray-700 w-1/4",
    );
    expect(container.querySelector("span:last-child")).toHaveClass(
      "text-gray-600 w-3/4 text-right lg:text-left",
    );
  });
});
