import { CartHeader } from "@/components/atoms";
import { CartActions } from "@/components/molecules";
import { CartItemList } from "@/components/organisms";
import { CartContext } from "@/contexts";
import { Suspense, use } from "react";
import Skeleton from "react-loading-skeleton";

export const CartSkeleton: React.FC = () => {
  return (
    <section role="region" className="flex flex-col min-h-[80vh]">
      <h2 className="text-2xl" aria-label="Cart title">
        <Skeleton width={200} />
      </h2>
      <CartItemListSkeleton />
      <CartActionsSkeleton />
    </section>
  );
};

const CartItemListSkeleton: React.FC = () => (
  <div className="flex-grow">
    {[...Array(3)].map((_, index) => (
      <div key={index} className="mb-4">
        <Skeleton height={80} />
      </div>
    ))}
  </div>
);

const CartActionsSkeleton: React.FC = () => (
  <div className="mt-4">
    <Skeleton height={50} />
  </div>
);

export const Cart: React.FC = () => {
  const { cart } = use(CartContext);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <Suspense fallback={<CartSkeleton />}>
      <section role="region" className="flex flex-col min-h-[80vh]">
        <CartHeader ammountOfItems={cart.length} />
        <CartItemList cart={cart} />
        <CartActions cartLength={cart.length} totalPrice={totalPrice} />
      </section>
    </Suspense>
  );
};
