import { ICartItem } from "@/types/cart";
import { CartContext } from "@/contexts/CartContext";
import { use } from "react";
import { CartItemImage } from "@/components/atoms/CartItemImage/CartItemImage";
import { CartItemDetails } from "@/components/atoms/CartItemDetails/CartItemDetails";

export const CartItem = ({ cartItem }: { cartItem: ICartItem }) => {
  const { removeFromCart } = use(CartContext);

  return (
    <li className="flex flex-col items-start text-xs mb-1">
      <div className="h-[196px] flex items-start justify-between max-w-screen lg:w-[548px] lg:h-[246px]">
        <CartItemImage
          imageUrl={cartItem.imageUrl}
          name={`${cartItem.name} picture`}
          aria-hidden="true"
        />

        <CartItemDetails cartItem={cartItem} handleOnClick={removeFromCart} />
      </div>
    </li>
  );
};
