import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import { TEXTS } from "@/constants";

export const ContinueShoppingButton = ({
  isSmallScreen,
}: {
  isSmallScreen: boolean;
}) => {
  const navigate = useNavigate();

  return (
    <Button
      variant="inverse"
      size={isSmallScreen ? "small" : "large"}
      onClick={() => navigate("/phones")}
      ariaLabel="Continue shopping"
    >
      {TEXTS.cart.continueShopping.toUpperCase()}
    </Button>
  );
};
