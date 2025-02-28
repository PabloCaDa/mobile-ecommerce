import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { TEXTS } from "@/constants";

export const BackButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className="flex items-center w-[56px] h-[20px] text-xs cursor-pointer justify-between"
      aria-label="Back to previous page"
      title="Back"
    >
      <ChevronLeft strokeWidth={1} size={18} aria-hidden="true" />
      <span>{TEXTS.navbar.back.toUpperCase()}</span>
    </button>
  );
};
