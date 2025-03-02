import { IPhoneColorOptions } from "@/types";

interface ColorButtonProps {
  activeColor: IPhoneColorOptions;
  option: IPhoneColorOptions;
  onColorChange: (colorOption: IPhoneColorOptions) => void;
  onHover: (colorOption: IPhoneColorOptions | null) => void;
}

export const ColorButton = ({
  activeColor,
  option,
  onColorChange,
  onHover,
}: ColorButtonProps) => {
  const isActive = activeColor.hexCode === option.hexCode;

  return (
    <div
      className={`flex items-center justify-center w-[24px] h-[24px] border
      hover:border-black
      ${isActive ? "border-black" : "border-grey-100"}
    `}
      role="radio"
      aria-checked={isActive}
    >
      <button
        aria-checked={isActive}
        aria-label={`Select color ${option.name || option.hexCode}`}
        className="w-[20px] h-[20px]"
        onClick={() => onColorChange(option)}
        onMouseEnter={() => onHover(option)}
        onMouseLeave={() => onHover(null)}
        style={{ backgroundColor: option.hexCode }}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            onColorChange(option);
          }
        }}
      />
    </div>
  );
};
