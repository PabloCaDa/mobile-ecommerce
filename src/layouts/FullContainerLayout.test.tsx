import { render } from "@testing-library/react";
import { FullContainerLayout } from "./FullContainerLayout";

describe("FullContainerLayout", () => {
  it("renders children correctly", () => {
    const { getByText, container } = render(
      <FullContainerLayout>
        <div>Test Child</div>
      </FullContainerLayout>
    );

    expect(getByText("Test Child")).toBeInTheDocument();
    expect(container.firstChild).toHaveClass(
      "w-full px-1 lg:px-4 pb-1 mx-auto"
    );
  });
});
