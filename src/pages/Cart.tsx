import { CartHeader } from "@/components/atoms";
import { CartActions } from "@/components/molecules";
import { CartItemList } from "@/components/organisms";
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
      <CartHeader ammountOfItems={cart.length} />
      <CartItemList cart={cart} />
      <CartActions cartLength={cart.length} totalPrice={totalPrice} />
    </section>
  );
};
