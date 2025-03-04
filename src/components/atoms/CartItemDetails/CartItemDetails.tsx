import { ICartItem } from "@/types";
import { Button } from "@/components/atoms";
import { TEXTS } from "@/constants";
import startcase from "lodash.startcase";

interface CartItemDetailsProps {
  cartItem: ICartItem;
  handleOnClick: (ref: string) => void;
}

export const CartItemDetails = ({
  cartItem,
  handleOnClick,
}: CartItemDetailsProps) => {
  return (
    <div className="w-[160px] lg:w-[246px] h-[195px] mt-2 lg:mt-1 flex flex-col lg:justify-between self-start items-start">
      <div className="mb-1 lg:mb-2">
        <p>{cartItem.name.toUpperCase()}</p>
        <p>
          {cartItem.storage} | {cartItem.color.toUpperCase()}
        </p>
      </div>
      <div className="mb-1 lg:mb-2">
        <p>
          {TEXTS.cart.quantity.toUpperCase()}: {cartItem.quantity}
        </p>
        <p>{cartItem.price * cartItem.quantity} EUR</p>
      </div>
      <div>
        <Button
          onClick={() => handleOnClick(cartItem.ref)}
          variant="danger"
          size="content"
          ariaLabel="Remove item from cart"
        >
          {startcase(TEXTS.cart.removeButton)}
        </Button>
      </div>
    </div>
  );
};
