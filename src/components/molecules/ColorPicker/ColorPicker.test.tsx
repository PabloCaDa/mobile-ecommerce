import { render, screen, fireEvent } from "@testing-library/react";
import { ColorPicker } from "./ColorPicker";
import { IPhoneColorOptions } from "@/types/phone";

const mockColorOptions: IPhoneColorOptions[] = [
  {
    name: "Red",
    hexCode: "#FF0000",
    imageUrl: "image-url",
  },
  {
    name: "Green",
    hexCode: "#00FF00",
    imageUrl: "image-url",
  },
  {
    name: "Blue",
    hexCode: "#0000FF",
    imageUrl: "image-url",
  },
];

const mockOnColorChange = jest.fn();

describe("ColorPicker", () => {
  beforeEach(() => {
    render(
      <ColorPicker
        colorOptions={mockColorOptions}
        onColorChange={mockOnColorChange}
        activeColor={mockColorOptions[0]}
      />,
    );
  });

  it("renders color options", () => {
    expect(screen.getByText("Red")).toBeInTheDocument();
  });

  it("calls onColorChange when a color is clicked", () => {
    fireEvent.click(screen.getByLabelText("Select color Green"));

    expect(mockOnColorChange).toHaveBeenCalledWith(mockColorOptions[1]);
  });

  it("displays hovered color name", () => {
    fireEvent.mouseOver(screen.getByLabelText("Select color Blue"));

    expect(screen.getByText("Blue")).toBeInTheDocument();
  });
});
