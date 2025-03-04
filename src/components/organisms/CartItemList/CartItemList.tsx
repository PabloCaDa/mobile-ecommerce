import { CartItem } from "@/components/molecules";
import { ICartItem } from "@/types";

interface CartItemListProps {
  cart: ICartItem[];
}

export const CartItemList = ({ cart }: CartItemListProps) => {
  return (
    <ul className="flex-grow">
      {cart.map((cartItem) => (
        <CartItem key={cartItem.ref} cartItem={cartItem} />
      ))}
    </ul>
  );
};
