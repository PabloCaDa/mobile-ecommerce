import { TEXTS } from "@/constants";
import { Button } from "../Button/Button";

export const PayButton = ({ isSmallScreen }: { isSmallScreen: boolean }) => {
  return (
    <Button
      variant="primary"
      size={isSmallScreen ? "small" : "large"}
      onClick={() => {}}
      ariaLabel="Pay for items in cart"
    >
      {TEXTS.cart.payButton.toUpperCase()}
    </Button>
  );
};
