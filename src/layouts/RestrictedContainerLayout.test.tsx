import { render } from "@testing-library/react";
import { RestrictedContainerLayout } from "./RestrictedContainerLayout";

describe("RestrictedContainerLayout", () => {
  it("renders children correctly", () => {
    const { getByText } = render(
      <RestrictedContainerLayout>
        <div>Test Child</div>
      </RestrictedContainerLayout>
    );

    expect(getByText("Test Child")).toBeInTheDocument();
  });

  it("applies correct classes to the container", () => {
    const { container } = render(
      <RestrictedContainerLayout>
        <div>Test Child</div>
      </RestrictedContainerLayout>
    );

    expect(container.firstChild).toHaveClass("lg:w-[1200px] mx-auto");
  });
});
