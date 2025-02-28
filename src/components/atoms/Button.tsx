interface ButtonProps {
  ariaLabel: string;
  children: React.ReactNode;
  onClick: () => void;
  size: "content" | "small" | "large";
  variant: "default" | "primary" | "inverse" | "danger";
  className?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  ariaLabel,
  children,
  className = "",
  disabled = false,
  onClick,
  size,
  variant,
}) => {
  let buttonStyle = "w-full border";

  switch (variant) {
    case "primary":
      buttonStyle += ` py-[5px] px-[7px] border-black-100 bg-black-100 text-white  ${
        disabled
          ? "bg-grey-200 border-grey-200 text-grey-300"
          : "bg-black-100 text-white"
      }`;
      break;
    case "inverse":
      buttonStyle += ` py-[5px] px-[7px] bg-white text-black-100 border-black-300 ${
        disabled && "bg-grey-200 text-grey-300"
      }`;
      break;
    case "danger":
      buttonStyle += " border-0 py-[0px] px-[0px] text-red-500 text-start";
      break;
    default:
      buttonStyle += " bg-gray-100 text-gray-700 hover:bg-gray-200";
  }

  switch (size) {
    case "content":
      buttonStyle += " text-xs";
      break;
    case "small":
      buttonStyle += " h-[48px] text-xs";
      break;
    case "large":
      buttonStyle += " h-[56px]";
      break;
    default:
      buttonStyle += "";
  }

  return (
    <button
      aria-disabled={disabled}
      aria-label={ariaLabel}
      className={`${buttonStyle} ${className}`}
      onClick={!disabled ? onClick : undefined}
      role="button"
      tabIndex={disabled ? -1 : 0}
    >
      {children}
    </button>
  );
};
