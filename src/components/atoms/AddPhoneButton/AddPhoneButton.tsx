import { Button } from "@/components/atoms";
import { TEXTS } from "@/constants";

export const AddPhoneButton = ({
  handleOnClick,
  disabled,
}: {
  handleOnClick: () => void;
  disabled: boolean;
}) => {
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleOnClick();
    }
  };

  const buttonText = TEXTS.addPhoneButton.addPhoneButtonMessage;

  return (
    <Button
      variant="primary"
      size="large"
      onClick={handleOnClick}
      disabled={disabled}
      ariaLabel="Add phone to cart"
      onKeyPress={handleKeyPress}
    >
      {buttonText.toUpperCase()}
    </Button>
  );
};
