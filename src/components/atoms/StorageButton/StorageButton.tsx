import { IPhoneStorageOptions } from "@/types";

interface StorageButtonProps {
  activeStorage: IPhoneStorageOptions;
  option: IPhoneStorageOptions;
  onStorageChange: (storage: IPhoneStorageOptions) => void;
}

export const StorageButton = ({
  activeStorage,
  option,
  onStorageChange,
}: StorageButtonProps) => {
  const isActive = activeStorage.capacity === option.capacity;

  return (
    <button
      className={`border h-[65px] ${
        isActive ? "border-black" : "border-grey-100"
      }`}
      onClick={() => onStorageChange(option)}
      aria-label={`Select storage capacity ${option.capacity}GB`}
      role="radio"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onStorageChange(option);
        }
      }}
    >
      {option.capacity}
    </button>
  );
};
