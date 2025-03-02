import { render } from "@testing-library/react";
import { PhoneImage } from "./PhoneImage";

describe("PhoneDetailsImage", () => {
  it("renders correctly with given props and styles", () => {
    const { getByAltText, container } = render(
      <PhoneImage imageUrl="test-url" name="test-name" />,
    );

    const image = getByAltText("test-name picture");

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "test-url");
    expect(container.firstChild).toHaveClass(
      "w-[290px] h-[290px] lg:w-[510px] lg:h-[459px] flex items-center justify-center",
    );
  });
});
