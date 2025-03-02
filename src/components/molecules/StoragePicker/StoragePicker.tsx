import { StorageButton } from "@/components/atoms";
import { TEXTS } from "@/constants";
import { IPhoneStorageOptions } from "@/types/phone";

interface StoragePickerProps {
  storageOptions: IPhoneStorageOptions[];
  onStorageChange: (storage: IPhoneStorageOptions) => void;
  activeStorage: IPhoneStorageOptions;
}

export const StoragePicker: React.FC<StoragePickerProps> = ({
  storageOptions,
  onStorageChange,
  activeStorage,
}) => {
  const storageMessage = TEXTS.storagePicker.storageMessage;

  return (
    <div className="w-full mb-4">
      <p className="font-light text-sm mb-1">{storageMessage.toUpperCase()}</p>
      <div className="grid grid-cols-3 gap-0">
        {storageOptions.map((option) => (
          <StorageButton
            activeStorage={activeStorage}
            option={option}
            onStorageChange={onStorageChange}
            key={`${option.capacity} ${option.price}`}
          ></StorageButton>
        ))}
      </div>
    </div>
  );
};
