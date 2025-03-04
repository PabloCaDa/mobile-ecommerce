import { CartActions } from "@/components/molecules";
import { CartItemList } from "@/components/organisms";
import { TEXTS } from "@/constants";
import { CartContext } from "@/contexts";
import { use } from "react";

export const Cart: React.FC = () => {
  const { cart } = use(CartContext);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <section role="region" className="flex flex-col min-h-[80vh]">
      <h2 className="text-2xl" aria-label="Cart title">
        {TEXTS.cart.title.toUpperCase()}({cart.length})
      </h2>
      <CartItemList cart={cart} />
      <CartActions cartLength={cart.length} totalPrice={totalPrice} />
    </section>
  );
};
