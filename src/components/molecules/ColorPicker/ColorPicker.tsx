import { ColorButton } from "@/components/atoms";
import { TEXTS } from "@/constants";
import { IPhoneColorOptions } from "@/types/phone";
import { useState } from "react";

export const ColorPicker = ({
  colorOptions,
  onColorChange,
  activeColor,
}: {
  activeColor: IPhoneColorOptions;
  colorOptions: IPhoneColorOptions[];
  onColorChange: (colorOption: IPhoneColorOptions) => void;
}) => {
  const [hoveredColor, setHoveredColor] = useState<IPhoneColorOptions | null>(
    null,
  );

  const colorMessage = TEXTS.colorPicker.colorMesage;

  return (
    <div className="mb-2 font-light ">
      <p className="text-sm mb-1">{colorMessage.toUpperCase()}</p>
      <div className="w-[144px] grid grid-cols-4 gap-1" role="listbox">
        {colorOptions.map((option) => (
          <ColorButton
            activeColor={activeColor}
            key={option.hexCode}
            onColorChange={onColorChange}
            onHover={setHoveredColor}
            option={option}
          />
        ))}
      </div>
      <p className="text-xs min-h-1 mt-1">
        {hoveredColor?.name || activeColor.name || "\u00A0"}
      </p>
    </div>
  );
};
