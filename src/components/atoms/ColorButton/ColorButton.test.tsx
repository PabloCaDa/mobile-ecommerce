import { render, screen, fireEvent } from "@testing-library/react";
import { ColorButton } from "./ColorButton";
import { IPhoneColorOptions } from "@/types";

const mockColorOption: IPhoneColorOptions = {
  hexCode: "#FFFFFF",
  name: "White",
  imageUrl: "image-url",
};

const mockActiveColor: IPhoneColorOptions = {
  hexCode: "#000000",
  name: "Black",
  imageUrl: "image-url",
};

const handleColorChange = jest.fn();
const handleHover = jest.fn();

describe("ColorButton", () => {
  describe("render and behavior", () => {
    beforeEach(() => {
      render(
        <ColorButton
          activeColor={mockActiveColor}
          option={mockColorOption}
          onColorChange={handleColorChange}
          onHover={handleHover}
        />,
      );
    });

    it("renders correctly", () => {
      const buttonContainer = screen.getByRole("radio");
      expect(buttonContainer).toBeInTheDocument();
    });

    it("calls onColorChange when clicked", () => {
      const button = screen.getByRole("button");
      fireEvent.click(button);

      expect(handleColorChange).toHaveBeenCalledWith(mockColorOption);
    });

    it("calls onHover when hovered", () => {
      const button = screen.getByRole("button");
      fireEvent.mouseEnter(button);

      expect(handleHover).toHaveBeenCalledWith(mockColorOption);

      fireEvent.mouseLeave(button);

      expect(handleHover).toHaveBeenCalledWith(null);
    });
  });

  describe("aria-checked attribute", () => {
    it("when active", () => {
      render(
        <ColorButton
          activeColor={{ ...mockColorOption, hexCode: "#FFFFFF" }}
          option={mockColorOption}
          onColorChange={handleColorChange}
          onHover={handleHover}
        />,
      );

      const button = screen.getByRole("button");

      expect(button).toHaveAttribute("aria-checked", "true");
    });

    it("has correct aria-checked attribute when inactive", () => {
      render(
        <ColorButton
          activeColor={mockActiveColor}
          option={mockColorOption}
          onColorChange={handleColorChange}
          onHover={handleHover}
        />,
      );

      const button = screen.getByRole("button");

      expect(button).toHaveAttribute("aria-checked", "false");
    });
  });
});
