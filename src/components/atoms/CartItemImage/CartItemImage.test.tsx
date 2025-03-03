import { render, waitFor } from "@testing-library/react";
import { CartItemImage } from "./CartItemImage";

jest.mock("@/components/atoms/Image/Image", () => ({
  __esModule: true,
  default: ({
    imageUrl,
    name,
    className,
  }: {
    imageUrl: string;
    name: string;
    className: string;
  }) => <img src={imageUrl} alt={name} className={className} />,
}));

describe("CardPhoneImage", () => {
  it("renders correctly with given props", async () => {
    const { getByAltText } = render(
      <CartItemImage imageUrl="test-url" name="test-name" />,
    );

    const image = await waitFor(() => getByAltText("test-name picture"));

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "test-url");
  });
});
