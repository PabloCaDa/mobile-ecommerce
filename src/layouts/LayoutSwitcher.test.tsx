import { render } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { LayoutSwitcher } from "./LayoutSwitcher";

const renderRouterComponent = (initialEntries: string[]) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <LayoutSwitcher>
        <Routes>
          <Route path="/phones/:id" element={<>Phone detail page</>} />
          <Route path="/other" element={<>Other page</>} />
        </Routes>
      </LayoutSwitcher>
    </MemoryRouter>
  );
};

describe("LayoutSwitcher", () => {
  it("renders RestrictedContainerLayout for phone details page", () => {
    const { container } = renderRouterComponent(["/phones/1"]);

    expect(
      container.getElementsByClassName("lg:w-[1200px] mx-auto")
    ).toBeTruthy();
  });

  it("renders FullContainerLayout for other pages", () => {
    const { container } = renderRouterComponent(["/other"]);

    expect(
      container.getElementsByClassName("w-full px-1 lg:px-4 pb-1 mx-auto")
    ).toBeTruthy();
  });
});
